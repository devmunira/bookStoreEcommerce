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

const SingleProduct = ({data}) => {
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
                                title: data.title,
                                link: `/products/${data.id}`
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
                                <Image src={data.thumbnail} alt="" width={500} height={500}></Image>
                            </Box>
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                                slidesPerView={5}
                                spaceBetween={2}
                                freeMode={true}
                                scrollbar={{
                                hide: true
                            }}
                                style={{
                                "--swiper-navigation-color": "#000",
                                "--swiper-navigation-size": "25px"
                            }}
                                breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                }
                            }}>
                                {data
                                    .images
                                    .map((item, index) => <>< SwiperSlide style = {{  marginRight : '5px' }}className = {
                                        styles.product__images
                                    } > <Image alt={""} src={item} key={index} width={100} height={100}></Image> </SwiperSlide></>)
}
                            </Swiper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box>
                                <Breadcrumb
                                    breadcrumb={[
                                    {
                                        title: 'Products',
                                        link: '/products'
                                    }, {
                                        title: data.title,
                                        link: `/products/${data.id}`
                                    }
                                ]}></Breadcrumb>
                                <Typography
                                    variant='h1'
                                    sx={{
                                    color: theme.palette.text.primary,
                                    pt: 1,
                                    fontSize : "26px"
                                }}>{data.title}</Typography>

                                <Box className="justifyStartAlignCenter">
                                    {[1, 2, 3, 4, 5].map((item, index) => <Star
                                        key={index}
                                        style={{
                                        color: data.rating >= item
                                            ? theme.palette.secondary.main
                                            : 'grey',
                                        fontSize: '16px'
                                    }}></Star>)
}
                                    <Typography
                                        variant='body2'
                                        sx={{
                                        fontSize: '12px'
                                    }}>({data.rating}
                                        Rating)</Typography>
                                </Box>

                                <Typography
                                    variant='h5'
                                    sx={{
                                    color: theme.palette.primary.main
                                }}>
                                    <strong>${data.price}</strong>
                                </Typography>

                                <Typography
                                    style={{
                                    color: data.stock > 0
                                        ? theme.palette.success.main
                                        : theme.palette.error.main,
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}>{data.stock > 0
                                        ? 'In Stock'
                                        : 'Out of Stock'}</Typography>

                                <Typography
                                    style={{
                                    lineHeight: "28px",
                                    fontSize: '14px'
                                }}
                                    variant='body1'>{data.description}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis pariatur
                                    enim aliquid, officia minima ut ab esse in consequuntur.
                                </Typography>

                                <br></br>

                                <Box className="justifyStartAlignCenter">
                                    <input
                                        type="checkbox"
                                        style={{
                                        display: 'none'
                                    }}
                                        name="variant"
                                        value="e-book"
                                        id="Ebook"></input>
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
                                <IncrementDecrementBtn></IncrementDecrementBtn>
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
                                            {'AUHKJOL-09'}</li>
                                        <li>
                                            <strong>Catgeory :</strong>
                                            {data.category}</li>
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