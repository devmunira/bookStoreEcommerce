import Category from '@/components/home/Category'
import SEO from '@/components/layout/SEO'
import { useSingleSearch } from '@/hooks/useSingleSearch'
import { getAllCategories } from '@/services/category'
import { fabClasses } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'


export const getServerSideProps = async ({query}) => {
    try {
      let searchQuery = query.search ? `&filters[name][$contains]=${query.search}` : '';
      const categories = await getAllCategories(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image${searchQuery}`);
      return {
        props : {
          categories : categories ? categories : [],
          error : '',
        }
      }
    } catch (error) {
      return {
        props : {
          categories : [],
          error : error.message,
        }
      }
    }

}

const Catgeory = ({categories}) => {
  const {router , filter , handleCategoryFilter} = useSingleSearch();
  return (
    <>
       <Head>
        <title>Online Biggest Book Store in Bangladesh | Catgeory</title>
        <SEO
            title={'Product Categories'}
            description={'Lorem ipsum'}
            url={''}
            twitterCard={''}
            image={''}></SEO>
      </Head> 
      <main> 
        {
          <Category 
                categories={categories} 
                baseUrl = {process.env.NEXT_PUBLIC_API_BASE_URL}
                seeAll={false}
                search={true}
                filter={filter}
                handleCategoryFilter={handleCategoryFilter}
                > 
          </Category>
        }
      </main>
    </>
  )
}

export default Catgeory