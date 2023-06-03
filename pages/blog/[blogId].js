import {Box, Container, Typography} from '@mui/material'
import React from 'react'
import Breadcrumb from '../../components/shared/ui/Breadcrumb'
import SortGroup from '../../components/shared/ui/SortGroup'
import PaginationLink from '../../components/shared/ui/pagination'
import BlogSidebar from '@/src/components/blog/sidebar'
import {getSinglePostData, getStorePostId} from '@/src/services/blog'
import {Grid} from '@mui/material'
import ImgMediaCard from '@/src/components/blog/Card'
import Head from 'next/head'
import SEO from '@/src/components/layout/SEO'

export const getServerSideProps = async({params}) => {
    const res = await getSinglePostData(params.blogId)
    return {
        props: {
            data: res,
        }
    };
};

const SingleBlog = ({data}) => {
    return (
        <Box className="wrapper">
            <Head>
            <title>{data.title}</title>
                <SEO
                    title={data.title}
                    description={data.description.slice(0,200)}
                    url={''}
                    twitterCard={''}
                    image={''}></SEO>
            </Head>
            <Container>
                <Grid container>
                    <Grid item>
                        <Breadcrumb
                            breadcrumb={[
                            {
                                title: 'Blog',
                                link: '/blog'
                            }, {
                                title: data.title,
                                link: `/blog/${data.id}`
                            }
                        ]}></Breadcrumb>
                    </Grid>
                </Grid>
                <Box className="wrapper_container">
                    <Grid container spacing={5}>
                        
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Grid container spacing={2}>
                                <ImgMediaCard
                                    img={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data
                                    ?.thumbnail}`}
                                    heading={data.title}
                                    headingSize='30px'
                                    height={'400px'}
                                    text={data
                                    .description}
                                    link={`/blog/${data.id}`}
                                    author={data.author.name}
                                    createdAt={data.createdAt}
                                    linkDisplay={false}
                                    video={data.video}
                                    posttype={data.posttype}
                                    audio={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data
                                    ?.audio}`}></ImgMediaCard>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default SingleBlog