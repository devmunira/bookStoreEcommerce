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
import { useDispatch, useSelector } from 'react-redux' 
import {getAllCategories} from "@/src/services/category"

export async function getServerSideProps(context) {
    let isLoading = true;
    try {
        let sliders = await getSlidersAllData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sliders?populate=image&fields[0]=image`);

        let categories = await getAllCategorie(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image`);
        
        let authors = await getAllAuthorsData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=*&pagination[limit]=6`);

        isLoading = false;
        return {
            props: {
                sliders: sliders ? sliders : [],
                categories: categories ? categories : [],
                authors: authors ? authors : [],
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
            authors: [],
            error : JSON.parse(JSON.stringify(error.message)),
          }
        }
    }

}

export default function Home({toggleTheme, sliders , error , categories , authors , isLoading}) {
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
      <Category categories={categories} baseUrl = {process.env.NEXT_PUBLIC_API_BASE_URL}> </Category>
      <Feature> </Feature>
      <Author authors={authors}> </Author> 
    </main>
    </>
  )
}
