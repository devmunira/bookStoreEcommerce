import Head from 'next/head'
import Slider from '@/src/components/home/Slider'
import Category from '@/src/components/home/Category'
import Feature from '@/src/components/home/Feature'
import Author from '@/src/components/home/Author'
import SEO from '@/src/components/layout/SEO'
import { getSlidersAllData } from '@/src/services/sliders'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { getAllAuthorsData } from '@/src/services/author'
import { getAllProducts } from '@/src/services/product'
import { useDispatch, useSelector } from 'react-redux' 
import {getAllCategories} from "@/src/services/category"
import ProductSlider from '@/src/components/home/ProductSlider'

export async function getServerSideProps(context) {
    let isLoading = true;
    try {
        let sliders = await getSlidersAllData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sliders?populate=image&fields[0]=image`);

        let categories = await getAllCategories(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image`);
        
        let authors = await getAllAuthorsData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=*&pagination[limit]=6`);

        const products = await getAllProducts(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?_sort=publishedAt:ASC&_limit=10&populate=*`);

        isLoading = false;
        return {
            props: {
                sliders: sliders ? sliders : [],
                categories: categories ? categories : [],
                authors: authors ? authors : [],
                products: products ? products : [],
                error : '',
                isLoading,
            }
        }

    } catch (error) {
        return {
          props : {
            isLoading : true,
            sliders: [],
            categories: [],
            products: [],
            authors: [],
            error : JSON.parse(JSON.stringify(error.message)),
          }
        }
    }

}

export default function Home({toggleTheme, products, sliders , error , categories , authors , isLoading}) {
  console.log(products)

  useEffect(() => {
        if (error) {
            toast(error, {id: 'normal'});
        }
    }, []);
    return (
    <>
      <Head>
      <title>Online Biggest Book Store in Bangladesh</title>
        <SEO
            title={'Home'}
            description={'Lorem ipsum'}
            url={''}
            twitterCard={''}
            image={''}></SEO>
      </Head> 
    <main> 
      <Slider sliders={sliders} isLoading={isLoading}></Slider> 
      <Category categories={categories} isLoading={isLoading}  baseUrl = {process.env.NEXT_PUBLIC_API_BASE_URL}> </Category>
      <ProductSlider isLoading={isLoading} products={products} title={'New Arrivals'}></ProductSlider>
      <Feature isLoading={isLoading}> </Feature>
      <Author authors={authors} isLoading={isLoading}> </Author> 
    </main>
    </>
  )
}
