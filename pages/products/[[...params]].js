import {getAllProducts} from '@/src/services/product'
import React from 'react'
import {Box, Container, Grid, Skeleton} from '@mui/material';
import Breadcrumb from '@/src/components/shared/ui/Breadcrumb';
import SortGroup from '@/src/components/shared/ui/SortGroup';
import PaginationLink from '@/src/components/shared/ui/pagination';
import ProductSideBar from '@/src/components/products/sidebar';
import ProductCard from '@/src/components/shared/ui/ProductCard';
import {useStoreState} from 'easy-peasy';
import Head from 'next/head';
import SEO from '@/src/components/layout/SEO';
import {useDispatch, useSelector} from 'react-redux';
import {modifyQueryString} from '@/src/lib/query';
import {getAllCategories} from '@/src/services/category';
import {getAllAuthors} from '@/src/services/author';
import {productSortList} from '@/src/constant/sortList';
import useSearch from '@/src/hooks/useSearch';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useIsLoading } from '@/src/hooks/useisLoading';
import { chnageColumn } from '@/src/redux/colunm/actions';


export async function getServerSideProps({query}) {
    let isLoading = false;
    try {
        isLoading = true;
        let categoryfilter = modifyQueryString(query.category, 'category_id');
        let authorFilter = modifyQueryString(query.author, 'author');
        let searchFilter = query.search
            ? `&filters[title][$contains]=${query.search}`
            : '';


        let sorting = '';
        if(query.sort == 'asc' || query.sort == 'desc'){
            sorting =`&sort[0]=title%3A${query.sort}`
        }
        if(query.sort == 'lth' || query.sort == 'htl'){
            sorting =`&sort[0]=price%3A${query.sort == 'lth' ? 'asc' : 'desc'}`
        }


        let priceFilter = query.price
            ? `&filters[price][$lte]=${query.price}`
            : '';
        let pagination = `&pagination[page]=${query.page
            ? query.page
            : 1}`;

        const products = await getAllProducts(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?populate=*${searchFilter}${categoryfilter}${authorFilter}${sorting}${pagination}${priceFilter}&pagination[pageSize]=4`);

        let categories = await getAllCategories(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?populate=image`);

        let authors = await getAllAuthors(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=image`);
        isLoading = false;
        return {
            props: {
                products,
                error: '',
                categories,
                authors,
                isLoading
            }
        }
    } catch (error) {
        isLoading = false
        return {
            props: {
                products: [],
                error: error.message,
                categories: [],
                authors: [],
                isLoading
            }
        }
    }
}

const Products = ({products, categories, authors, error}) => {
    const {router, handleCheckbox, handlePage, handleInput, filter} = useSearch();
    const column = useSelector(state => state.column)
    useEffect(() => {
        if (error) {
            toast(error, {id: 'normal'});
        }
    }, [error]);
    
    const {isLoading, setIsLoading} = useIsLoading()

    const dispatch = useDispatch();

    useEffect(() => {
        let count = 0;
        dispatch(chnageColumn(3))
        let Interval = setInterval(() => {
            count = count + 1;
            if(count === 3){
                setIsLoading(false)
                clearInterval(Interval)
            }
        },1000)
    },[filter])

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
                        <SortGroup 
                        page={'products'}
                        handleInput={handleInput} 
                        router={router} 
                        sortList={productSortList}></SortGroup>
                    </Grid>
                </Grid>
                <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <ProductSideBar
                                isLoading={isLoading}
                                categories={categories}
                                authors={authors}
                                handleCheckbox={handleCheckbox}
                                handleInput={handleInput}
                                filter={filter}></ProductSideBar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Grid container spacing={2} >
                                {isLoading == false && products && products.items.length > 0 && products.items.map((item, index) => <Grid item xs={6} sm={6} md={column} lg={column} key={index}>
                                    <ProductCard item={item}></ProductCard>
                                </Grid>)}

                                    {isLoading == true && [1,2,3,4,5,6,7,8].map((items,index) => 
                                        <Grid item sm={6} md={column} lg={column} key={index}>
                                            <Skeleton variant="rectangular" width={'100%'} height={200} />
                                            <Skeleton />
                                            <Skeleton width="60%" />
                                            <Skeleton width="30%" />
                                        </Grid>
                                    )}
                            </Grid>
                            <PaginationLink
                            page={filter.page}
                            pageCount={products.pagination ? products.pagination.pageCount : 0}
                            handlePage={handlePage}
                            
                            ></PaginationLink>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Products