import Author from '@/components/home/Author'
import Category from '@/components/home/Category'
import SEO from '@/components/layout/SEO'
import { useSingleSearch } from '@/hooks/useSingleSearch'
import { getAllAuthorsData } from '@/services/author'
import { getAllCategories } from '@/services/category'
import { Typography } from '@mui/material'
import Head from 'next/head'


export const getServerSideProps = async ({query}) => {
    try {
      let searchQuery = query.search ? `&filters[name][$contains]=${query.search}` : '';
      const authors = await getAllAuthorsData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=*${searchQuery}`);
      return {
        props : {
          authors : authors  ? authors : [],
          error : '',
        }
      }
    } catch (error) {
      return {
        props : {
          authors : [],
          error : error.message,
        }
      }
    }

}

const Catgeory = ({authors}) => {
  const {router , filter , handleCategoryFilter} = useSingleSearch();
  return (
    <>
       <Head>
        <title>Online Biggest Book Store in Bangladesh | Catgeory</title>
        <SEO
            title={'Product Auhtors'}
            description={'Lorem ipsum'}
            url={''}
            twitterCard={''}
            image={''}></SEO>
      </Head> 
      <main> 
        {
          authors.length > 0 ? <Author authors={authors} handleCategoryFilter={handleCategoryFilter} filter={filter} router={router}> </Author>  : <Typography variant='body2'>No authors found</Typography>
        }
      </main>
    </>
  )
}

export default Catgeory