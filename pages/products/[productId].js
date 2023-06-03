import React from 'react'
import SingleProduct from '@/src/components/products/SingleProduct'
import { getAllProducts, getSingleProduct } from '@/src/services/product';
import { Card, Container } from '@mui/material';
import ProductSlider from '@/src/components/home/ProductSlider';
import ProductDescription from '@/src/components/products/ProductDescription';
import Head from 'next/head';
import SEO from '@/src/components/layout/SEO';


export async function getServerSideProps({params}) {
  const data = await getSingleProduct(params.productId);
  const products = await getAllProducts();
  return {
    props: {
      data,
      products,
    }
  }
}

const ProductView = ({data , products}) => {
  return (
   <>
   <Head>
      <SEO
            title={'Home'}
            description={'Lorem ipsum'}
            url={''}
            twitterCard={''}
            image={''}       
        ></SEO>  
    </Head>
    <SingleProduct data={data}></SingleProduct>
    <Container>
        <Card>
          <ProductDescription></ProductDescription>
        </Card>
        <br></br>
        <ProductSlider title={'Related Products'} products={products} ></ProductSlider>
    </Container>
   </>
  )
}

export default ProductView