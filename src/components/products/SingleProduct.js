import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Input,
    Typography
} from '@mui/material'
import React from 'react'
import Breadcrumb from '../shared/ui/Breadcrumb'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import styles from "../../styles/productcard.module.css"
import {useTheme} from "@mui/material/styles"
import Link from 'next/link'
import {
    CompareArrows,
    FacebookOutlined,
    FavoriteBorderSharp,
    Instagram,
    LinkedIn,
    Star,
    StarBorder,
    StarBorderTwoTone,
    StarHalf,
    StarHalfOutlined,
    StartSharp,
    Twitter
} from '@mui/icons-material'
import {PlaneBtn, PrimaryBtn, SecBtn, VariantBtn} from '../shared/styled/component'
import IncrementDecrementBtn from '../shared/ui/IncrementDecrementBtn'

const SingleProduct = ({product}) => {
    const theme = useTheme()
    return (
        <Box className="wrapper">
            <Container>
                <Grid container>
                    <Grid item>
                        <Breadcrumb
                            breadcrumb={[
                            {
                                title: 'Products',
                                link: '/products'
                            }, {
                                title: product?.title,
                                link: `/products/single/${product?.id}`
                            }
                        ]}></Breadcrumb>
                    </Grid>
                </Grid>
                <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <Box
                                style={{
                                width: '100%',
                                height: 'auto'
                            }}
                                className={styles.product__thumbnail__container}>
                                <Image style={{ objectFit : "contain" , boxShadow : theme.shadows[1] }} src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product?.thumbnail}`} alt="" width={400} height={600}></Image>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box>
                                <Breadcrumb
                                    breadcrumb={[
                                    {
                                        title: 'Products',
                                        link: '/products'
                                    }, {
                                        title: product?.title,
                                        link: `/products/single/${product?.id}`
                                    }
                                ]}></Breadcrumb>
                                <Typography
                                    variant='h1'
                                    sx={{
                                    color: theme.palette.text.primary,
                                    pt: 1,
                                    fontSize : "26px"
                                }}>{product?.title}</Typography>

                                <Box className="justifyStartAlignCenter">
                                    {[1, 2, 3, 4, 5].map((item, index) => <Star
                                        key={index}
                                        style={{
                                        color: product?.rating >= item
                                            ? theme.palette.secondary.main
                                            : 'grey',
                                        fontSize: '16px'
                                    }}></Star>)
}
                                    <Typography
                                        variant='body2'
                                        sx={{
                                        fontSize: '12px'
                                    }}>({product?.rating}
                                        Rating)</Typography>
                                </Box>

                                <Typography
                                    variant='h5'
                                    sx={{
                                    color: theme.palette.primary.main
                                }}>
                                    {product?.sale_price && <strong> ${product?.sale_price} </strong>}

                                    {product?.sale_price ? <del> ${product?.price}</del> : <strong> ${product?.price}</strong>}
                                </Typography>

                                <Typography
                                    style={{
                                    color: product?.stock > 0
                                        ? theme.palette.success.main
                                        : theme.palette.error.main,
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}>{product?.stock > 0
                                        ? 'In Stock'
                                        : 'Out of Stock'}</Typography>

                                <Typography
                                    style={{
                                    lineHeight: "28px",
                                    fontSize: '14px'
                                }}
                                    variant='body1'>{product?.short_des}</Typography>

                                <br></br>

                                <Box className="justifyStartAlignCenter">
                                    <input
                                        type="checkbox"
                                        style={{
                                        display: 'none'
                                        }}
                                        name="variant"
                                        value="e-book"
                                        id="Ebook">
                                        </input>

                                    <label for="Ebook">
                                        <VariantBtn >E-Book</VariantBtn>
                                    </label>

                                    <input
                                        type="checkbox"
                                        style={{
                                        display: 'none'
                                    }}
                                        name="variant"
                                        value="e-book"
                                        id="hardCopy"></input>
                                    <label for="hardCopy">
                                        <VariantBtn >Hard Copy</VariantBtn>
                                    </label>
                                </Box>

                                <br></br>
                                <IncrementDecrementBtn item={product}></IncrementDecrementBtn>
                                <br></br>
                                <Box
                                    style={{
                                    py: 2
                                }}
                                className="justifyStartAlignCenter">
                                    <PrimaryBtn>Add to Cart</PrimaryBtn>
                                    <SecBtn>CheckOut</SecBtn>
                                </Box>
                                <br></br>
                                <Divider></Divider>
                                <Box
                                    style={{
                                    py: 2,
                                    gap: 20
                                }}
                                    className="justifyStartAlignCenter">
                                    <Link href={'/'} legacyBehavior>
                                        <PlaneBtn
                                            className="justifyStartAlignCenter"
                                            style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}>
                                            <CompareArrows></CompareArrows>
                                            Compare</PlaneBtn>
                                    </Link>

                                    <Link href={'/'} legacyBehavior>
                                        <PlaneBtn
                                            className="justifyStartAlignCenter"
                                            style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}>
                                            <FavoriteBorderSharp></FavoriteBorderSharp>
                                            Add to Wishlist</PlaneBtn>
                                    </Link>
                                </Box>

                                <Divider></Divider>
                                <br></br>

                                <Box>
                                    <ul className={styles.product__list}>
                                        <li>
                                            <strong>SKU :</strong>
                                            {product?.sku}</li>
                                        <li>
                                            <strong>Catgeory :</strong>
                                            {product?.category.name}</li>
                                        <li className="justifyStartAlignCenter">
                                            <strong>
                                                Share :</strong>
                                            <Link href={'/'} passHref>
                                                <FacebookOutlined
                                                    style={{
                                                    height: '20px',
                                                    color: theme.palette.secondary.main
                                                }}></FacebookOutlined>
                                            </Link>
                                            <Link href={'/'} passHref>
                                                <Twitter
                                                    style={{
                                                    height: '20px',
                                                    color: theme.palette.secondary.main
                                                }}></Twitter>
                                            </Link>
                                            <Link href={'/'} passHref>
                                                <LinkedIn
                                                    style={{
                                                    height: '20px',
                                                    color: theme.palette.secondary.main
                                                }}></LinkedIn>
                                            </Link>
                                            <Link href={'/'} passHref>
                                                <Instagram
                                                    style={{
                                                    height: '20px',
                                                    color: theme.palette.secondary.main
                                                }}></Instagram>
                                            </Link>
                                        </li>
                                    </ul>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default SingleProduct