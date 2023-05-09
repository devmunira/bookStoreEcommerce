import { getAllProducts } from '@/lib/product'
import React from 'react'
import { useRouter } from 'next/router';
import { Box, Container, Grid } from '@mui/material';
import Breadcrumb from '@/components/shared/ui/Breadcrumb';
import SortGroup from '@/components/shared/ui/SortGroup';
import PaginationLink from '@/components/shared/ui/pagination';
import ProductSideBar from '@/components/products/sidebar';
import ProductCard from '@/components/shared/ui/ProductCard';
import { useStoreState } from 'easy-peasy';
import Head from 'next/head';
import SEO from '@/components/layout/SEO';


export async function getServerSideProps({params}){
    const data = await getAllProducts();
    if(!data){
        return {
            notFound: true,
        }
    }
    return {
        props : {
            data,
        }
    }
}

const Products = ({data}) => {
  const {params = []} = useRouter().query;
  const {data : column} = useStoreState((state) => state.column)
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
                <Breadcrumb breadcrumb={[{ title : 'Products' , link : '/products' }]}></Breadcrumb>
            </Grid>
            <Grid xs={12} sm={12} md={9} lg={10} item>
                <SortGroup></SortGroup>
            </Grid>
        </Grid>
        <Box className="wrapper_container">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <ProductSideBar></ProductSideBar>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <Grid container spacing={2}>
                            {
                            data.map((item , index) => 
                                    <Grid item xs={6} sm={6} md={column} lg={column} key={index}>
                                        <ProductCard item={item}></ProductCard>
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

export default Products