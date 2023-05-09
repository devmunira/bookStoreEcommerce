import BlogSidebar from "@/components/blog/sidebar";
import Breadcrumb from "@/components/shared/ui/Breadcrumb";
import ImgMediaCard from "@/components/blog/Card";
import SortGroup from "@/components/shared/ui/SortGroup";
import { getStorePostData } from "@/lib/blog";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import PaginationLink from "@/components/shared/ui/pagination";
import Head from "next/head";
import SEO from "@/components/layout/SEO";

// Get All Post Data via Static Site Generation with fallback true and revalidion after every 1 mins
export async function getStaticProps(){
    const allPostsData = await getStorePostData();
    if (!allPostsData) {
        return {
          notFound: true,
        }
    }
    return {
        props : {
            post : allPostsData,
        },
        revalidate : 10,
    }
}

const BlogPage = ({post}) => {
    const {data} = useStoreState((state) => state.column)
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
                <Grid xs={12} sm={12} md={3} lg={2} item >
                    <Breadcrumb breadcrumb={[{ title : 'Blog' , link : '/blog' }]}></Breadcrumb>
                </Grid>
                <Grid xs={12} sm={12} md={9} lg={10} item>
                    <SortGroup></SortGroup>
                </Grid>
            </Grid>
            <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <BlogSidebar></BlogSidebar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Grid container spacing={2}>
                                {
                                post.posts.map((item , index) => 
                                        <Grid item xs={6} sm={6} md={data} lg={data} key={index}>
                                            <ImgMediaCard 
                                            img={'/blog.jpg'}
                                            heading={item.title.slice(0,25)}
                                            text={item.body.slice(0,100)}
                                            link={`/blog/${item.id}`}
                                            ></ImgMediaCard>
                                        </Grid>
                                        )}
                                </Grid>
                                <PaginationLink></PaginationLink>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
    </Box>
    )

}




export default BlogPage;