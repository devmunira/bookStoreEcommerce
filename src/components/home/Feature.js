import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SectionHeading from "../shared/ui/SectionHeading";
import styles from "../../styles/productcard.module.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid as SwiperGrid, Navigation } from "swiper";
import { PrimaryBtn, SecBtn } from "../shared/styled/component";

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const Feature = () => {
    return (
        <Box className="wrapper">
            <Container>
            <SectionHeading icon={true} text={'Featured Books'}></SectionHeading>
                <Box className="wrapper_container">
                    <Grid container>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Box className={styles.feature_main}>
                                <Image src='/featuresec.jpg' alt="featured image" width={1000} height={1000}></Image>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={8} md={8} lg={8} className={styles.feature_slider}>
                            <Swiper
                            slidesPerView={5}
                            grid={{ 
                                rows : 2,
                                fill: "row",
                             }}
                             spaceBetween={10}
                             navigation={{ clickable:true }}
                             modules={[SwiperGrid,Navigation]}
                             className="mySwiper"
                             style={{
                                "--swiper-navigation-color": "#000",
                                "--swiper-navigation-size": "15px",
                            }}
                                        
                            >
                            {
                                array.map((item,index) => (
                                    <Grid item xs={6} md={4} lg={3} key={index} >
                                        <SwiperSlide style={{ width : '100%' , height:'200px' , position: "relative" }} className={styles.feature_slider}>
                                            <Image src="/feature.webp" fill alt="feature"></Image>
                                            <div className={styles.feature_slider_overly}>
                                                <Typography variant="body1">Salman Rushide</Typography>
                                                <PrimaryBtn>Add to Cart</PrimaryBtn>
                                                <SecBtn>View Deatils</SecBtn>
                                            </div>
                                            
                                        </SwiperSlide>
                                    </Grid>
                                ))
                            }
                            
                            </Swiper>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )

}

export default Feature;