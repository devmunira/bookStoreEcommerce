import Head from 'next/head'
import Slider from '@/components/home/Slider'
import Category from '@/components/home/Category'
import Feature from '@/components/home/Feature'
import Author from '@/components/home/Author'
import SEO from '@/components/layout/SEO'
import { getSlidersAllData } from '@/services/sliders'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { getAllAuthors, getAllAuthorsData } from '@/services/author'
import { useDispatch, useSelector } from 'react-redux'

export async function getServerSideProps(context) {
    try {
        let sliders = await getSlidersAllData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sliders?populate=image&fields[0]=image`);
        let categories = await getAllProductCategories(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image`);
        let authors = await getAllAuthorsData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=image&pagination[limit]=6`);

        return {
            props: {
                sliders: sliders ? sliders : [],
                categories: categories ? categories : [],
                authors: authors ? authors : [],
                error : '',
            }
        }

    } catch (error) {
        return {
          props : {
            sliders: [],
            categories: [],
            authors: [],
            error : JSON.parse(JSON.stringify(error.message)),
          }
        }
    }

}

export default function Home({toggleTheme, sliders , error , categories,authors}) {
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
      <Slider sliders={sliders}></Slider> 
      <Category categories={categories} baseUrl = {process.env.NEXT_PUBLIC_API_BASE_URL}> </Category>
      <Feature> </Feature>
      <Author authors={authors}> </Author> 
    </main>
    </>
  )
}
