import Head from 'next/head'
import Slider from '@/components/home/Slider'
import Category from '@/components/home/Category'
import Feature from '@/components/home/Feature'
import Author from '@/components/home/Author'
import SEO from '@/components/layout/SEO'
import { getSlidersAllData } from '@/lib/sliders'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { getAllCategories } from '@/lib/category'
import { getAllAuthors } from '@/lib/author'

export async function getServerSideProps(context) {
  console.log('ENV' , process.env.NEXT_PUBLIC_API_BASE_URL)

    try {
        let sliders = await getSlidersAllData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sliders?populate=image&fields[0]=image`);
        let categories = await getAllCategories(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image`);

        let authors = await getAllAuthors(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=image&pagination[limit]=6`);

        return {
            props: {
                sliders: sliders ? sliders : [],
                categories: categories ? categories : [],
                authors: authors ? authors : [],
                error : '',
            }
        }

    } catch (error) {
      console.log(JSON.parse(JSON.stringify(error.message)))
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
