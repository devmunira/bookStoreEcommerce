import {getAllProducts} from '@/src/services/product'
import React from 'react'
import {useRouter} from 'next/router';
import {Box, Container, Grid} from '@mui/material';
import Breadcrumb from '@/src/components/shared/ui/Breadcrumb';
import SortGroup from '@/src/components/shared/ui/SortGroup';
import PaginationLink from '@/src/components/shared/ui/pagination';
import ProductSideBar from '@/src/components/products/sidebar';
import ProductCard from '@/src/components/shared/ui/ProductCard';
import {useStoreState} from 'easy-peasy';
import Head from 'next/head';
import SEO from '@/src/components/layout/SEO';
import {useSelector} from 'react-redux';
import {modifyQueryString} from '@/src/lib/query';
import {getAllCategories} from '@/src/services/category';
import {getAllAuthors} from '@/src/services/author';
import {productSortList} from '@/src/constant/sortList';
import useBlogSearch from '@/src/hooks/useBlogSearch';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export async function getServerSideProps({params}) {
    try {
        let categoryfilter = modifyQueryString(query.category, 'category_id');
        let authorFilter = modifyQueryString(query.author, 'author');
        let search = query.search
            ? `&filters[title][$contains]=${query.search}`
            : '';
        let sorting = query.sort
            ? `&sort[0]=title%3A${query.sort}`
            : '';
        let pagination = `&pagination[page]=${query.page
            ? query.page
            : 1}`;

        const products = await getAllProducts(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?populate=*&pagination[pageSize]=4${search}${categoryfilter}${authorFilter}${sorting}${pagination}`);
        let categories = await getAllCategories(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image`);
        let authors = await getAllAuthors(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=image`);

        return {
            props: {
                products,
                error: '',
                categories,
                authors
            }
        }
    } catch (error) {
        return {
            props: {
                products: [],
                error: error.message,
                categories: [],
                authors: []
            }
        }
    }
}

const Products = ({products, categories, authors, error}) => {
    console.log(categories , authors)
    const {router, handleCheckbox, handlePage, handleInput, filter} = useBlogSearch();
    const {column} = useSelector(state => state.column)
    useEffect(() => {
        if (error) {
            toast(error, {id: 'normal'});
        }
    }, [error]);

    return (
        <Box className="wrapper">
            <Head>
                <SEO
                    title={'Home'}
                    description={'Lorem ipsum'}
                    url={''}
                    twitterCard={''}
                    image={''}></SEO>
            </Head>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={3} lg={2} item>
                        <Breadcrumb
                            breadcrumb={[{
                                title: 'Products',
                                link: '/products'
                            }
                        ]}></Breadcrumb>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={10} item>
                        <SortGroup handleInput={handleInput} router={router} sortList={productSortList}></SortGroup>
                    </Grid>
                </Grid>
                <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <ProductSideBar
                                categories={categories}
                                authors={authors}
                                handleCheckbox={handleCheckbox}
                                handleInput={handleInput}></ProductSideBar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Grid container spacing={2}>
                                {/* {products && products.items.length > 0 && products.map((item, index) => <Grid item xs={6} sm={6} md={column} lg={column} key={index}>
                                    <ProductCard item={item}></ProductCard>
                                </Grid>)} */}
                            </Grid>
                            <PaginationLink></PaginationLink>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Products