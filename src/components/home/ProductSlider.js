import { Container, Grid, Typography , Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import SectionHeading from "../shared/ui/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ProductCard from "../shared/ui/ProductCard";


const ProductSlider = ({products , title , isLoading}) => {
    return (
        <Box className="wrapper">
            <Container>
            <SectionHeading icon={true} text={title} name={title}></SectionHeading>
            <Swiper
                pagination={{
                type: "clickable",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                freeMode={true}
                scrollbar={{
                hide: true,
                }}
                style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-navigation-size": "25px",
                      "paddingTop" : "20px",
                }}
                breakpoints={{
                300 : {
                    slidesPerView : 2,
                    spaceBetween : 10,
                },
                500:{
                    slidesPerView : 2,
                    spaceBetween : 10,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,  
                    spaceBetween: 10,
                },
            }}
            >
            
        <Grid container>
            {       
                products?.items?.length > 0 && products.items.map((item , index) => (    
                    <SwiperSlide key={item.id} style={{  marginRight : '5px' }}>
                    <Grid item  xs={12} sm={6} md={2} lg={2} >
                        <ProductCard item={item} style={{ overflow : 'hidden' }}></ProductCard>
                    </Grid>
                    </SwiperSlide>
                ))
            }
        </Grid>

            </Swiper>

                <Grid container spacing={2}>
                    {isLoading &&
                        [1,2,3,4,5,6].map((items,index) => 
                            <Grid item sm={6} md={2} lg={2} key={index}>
                                <Skeleton variant="rectangular" width={'100%'} height={200} />
                                <Skeleton />
                                <Skeleton width="60%" />
                                <Skeleton width="30%" />
                            </Grid>

                        )
                    }
                </Grid>
        </Container>
    </Box>
    )

}

export default ProductSlider;