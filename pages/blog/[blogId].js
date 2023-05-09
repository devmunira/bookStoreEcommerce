import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Breadcrumb from '../../components/shared/ui/Breadcrumb'
import SortGroup from '../../components/shared/ui/SortGroup'
import PaginationLink from '../../components/shared/ui/pagination'
import BlogSidebar from '@/components/blog/sidebar'
import { getSinglePostData, getStorePostId } from '@/lib/blog'
import {Grid} from '@mui/material'
import ImgMediaCard from '@/components/blog/Card'
import Head from 'next/head'
import SEO from '@/components/layout/SEO'

export const getStaticPaths = async () => {
    let paths = await getStorePostId();
    return {
      paths : paths,
      fallback: true,
    };
}; 

export const getStaticProps = async ({ params }) => {
    const res = await getSinglePostData(params.blogId)
    return {
      props: {
        data: res,
        revalidation : 10,
      },
    };
  };

const SingleBlog = ({data}) => {
  return (
    <Box className="wrapper">
    <Head>
      <SEO
            title={'Home'}
            description={'Lorem ipsum'}
            url={''}
            twitterCard={''}
            image={''}       
        ></SEO>  
    </Head>
        <Container>
            <Grid container>
                <Grid item >
                    <Breadcrumb breadcrumb={[{ title : 'Blog' , link : '/blog' },{ title : data.title , link : `/blog/${data.id}` }]}></Breadcrumb>
                </Grid>
            </Grid>
            <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <BlogSidebar></BlogSidebar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Grid container spacing={2}>
                                <ImgMediaCard img={'/blog.jpg'} heading={data.title} text={data.body} linkDisplay={false} link={'/'}></ImgMediaCard>
                            </Grid>
                            <PaginationLink></PaginationLink>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
    </Box>
  )
}

export default SingleBlog