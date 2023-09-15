import React from 'react'
import SingleProduct from '@/src/components/products/SingleProduct'
import { getAllProducts, getSingleProduct } from '@/src/services/product';
import { Card, Container } from '@mui/material';
import ProductSlider from '@/src/components/home/ProductSlider';
import ProductDescription from '@/src/components/products/ProductDescription';
import Head from 'next/head';
import SEO from '@/src/components/layout/SEO';


export async function getServerSideProps({params}) {
  try {
    const data = await getSingleProduct(params.productId);
    
    const products = await getAllProducts(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?_sort=publishedAt:ASC&_limit=6&populate=*`);

    return {
      props: {
        error : '',
        data : data,
        products : products,
      }
    }
  } catch (error) {
    return {
      props : {
        data : {},
        error,
        products : []
      }
    }
  }
}

const ProductView = ({data , products}) => {
  const product = data && data?.item
  console.log('Product' , data)
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
    <SingleProduct product={product}></SingleProduct>
    <Container>
        <Card>
          <ProductDescription author={product.author} description={product.description} table={product.table}></ProductDescription>
        </Card>
        <br></br>
        <ProductSlider title={'Related Products'} products={products} ></ProductSlider>
    </Container>
   </>
  )
}

export default ProductView