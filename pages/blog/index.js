import BlogSidebar from "@/src/components/blog/sidebar";
import Breadcrumb from "@/src/components/shared/ui/Breadcrumb";
import ImgMediaCard from "@/src/components/blog/Card";
import SortGroup from "@/src/components/shared/ui/SortGroup";
import { getStorePostData } from "@/src/services/blog";
import { Box, Container, Grid, Typography } from "@mui/material";
import PaginationLink from "@/src/components/shared/ui/pagination";
import Head from "next/head";
import SEO from "@/src/components/layout/SEO";
import Image from "next/image";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getAllCategories } from "@/src/services/blog";
import { getAllAuthors } from "@/src/services/author";
import { useSelector } from "react-redux";
import { sortList } from "@/src/constant/sortList";
import useSearch from "@/src/hooks/useSearch";
import { modifyQueryString } from "@/src/lib/query";
  

/**
 * TODO : Skeleton , Recent Post
 */

// Get All Post Data via Static Site Generation with fallback true and
// revalidion after every 1 mins
export async function getServerSideProps({query}) {
    let isLoading = true;
    try {
        //query modeling
        let categoryfilter = modifyQueryString(query.category,'blog_category');
        let authorFilter = modifyQueryString(query.author,'author');
        let search =     query.search ? `&filters[title][$contains]=${query.search}` : '';
        let sorting =    query.sort  ? `&sort[0]=title%3A${query.sort}` : '';
        let pagination = `&pagination[page]=${query.page ? query.page : 1}`;
        // get data from api
        let post = await getStorePostData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?populate=blog_category&populate[0]=posttype&populate[1]=posttype.thumbnail&populate[2]=author&populate[3]=posttype.audio${search}${categoryfilter}${authorFilter}${sorting}${pagination}&pagination[pageSize]=1`);
        let categories = await getAllCategories();
        let authors = await getAllAuthors();

        isLoading = false
        return {
            props: {
                post,
                categories,
                authors,
                error : '',
                isLoading,
            },
        }
    } catch (error) {
        isLoading = false;
        return {
            props: {
                post : [],
                categories : [],
                authors : [],
                error : JSON.parse(JSON.stringify(error.message)),
                isLoading,
            },
        }
    }
}

const BlogPage = ({post , categories , authors =[],  error , isLoading}) => {
    const column = useSelector((state) => state.column)
    const {router,handleCheckbox,handlePage,handleInput,filter} = useSearch();
    useEffect(() => {
        if (error) {
                toast(error, {id: 'normal'});
            }
        }, [error]); 
    
    return (
        <Box className="wrapper">
            <Head>
            <title>Book Store | Blog</title>
                <SEO
                    title={'All Blogs'}
                    description={'Boi Ghor All blog post about books'}
                    url={''}
                    twitterCard={''}
                    image={''}>
                </SEO>
            </Head>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={3} lg={2} item>
                        <Breadcrumb
                            breadcrumb={[{
                                title: 'Blog',
                                link: '/blog'
                            }
                        ]}></Breadcrumb>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={10} item>
                        <SortGroup
                        handleInput={handleInput}
                        router={router}
                        sortList={sortList}
                        ></SortGroup>
                    </Grid>
                </Grid>
                <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <BlogSidebar
                            handleCheckbox={handleCheckbox}
                            handleInput={handleInput}
                            categories={categories}
                            authors={authors}
                            post={post.items ? post.items : []}
                            ></BlogSidebar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Grid container spacing={2}>
                                {
                                    !isLoading ? 
                                    <>
                                    {post.items && post.items.length > 0 && post.items.map((item, index) => <Grid item xs={6} sm={6} md={column} lg={column} key={index}>
                                        <ImgMediaCard
                                            img={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.thumbnail}`}
                                            heading={item.title}
                                            id={item.id}
                                            slug={item.title.toLowerCase()
                                            .replace(/ /g, '-')
                                            .replace(/[^\w-]+/g, '')}
                                            text={item
                                            .description
                                            .slice(0, 100, '...')}
                                            link={`/blog/${item.id}`}
                                            author={item.author.name}
                                            createdAt={item.createdAt}
                                            linkDisplay={true}
                                            video={item.video}
                                            posttype={item.posttype}
                                            audio={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.audio}`}></ImgMediaCard>
                                    </Grid>)}

                                    {post.items && post.items.length == 0 && <Grid item xs={12} sm={12} md={12} lg={12}
                                className="justifyAlignCenter"
                                style={{ margin : '20vh 0'  , flexDirection : 'column' , gap : 10}}
                                >
                                    <Image
                                        src={'/emptystate.svg'}
                                        alt="emptyState.svg"
                                        width={150}
                                        height={150}
                                        style={{
                                        objectFit: 'contain'
                                    }}></Image>
                                    <Typography
                                        variant="h1"
                                        style={{
                                        fontSize: "24px"
                                    }}>Oops, No Blog Found</Typography>
                                    </Grid>
                                }</>
                                 : <>Loading...</>
                                }
                            </Grid>

                            <PaginationLink
                            page={filter.page}
                            pageCount={post.pagination ? post.pagination.pageCount : 0}
                            handlePage={handlePage}
                            ></PaginationLink>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )

}

export default BlogPage;