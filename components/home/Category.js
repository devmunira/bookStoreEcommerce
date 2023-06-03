import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import Image from "next/image";
import SectionHeading from "../shared/ui/SectionHeading";
import styles from '../../styles/category.module.css'
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Category = ({categories ,baseUrl,seeAll=true,handleCategoryFilter,filter}) => {
    const theme = useTheme()
    return (
        <div className="wrapper">
            <Container>
                <SectionHeading 
                text={'BoiGhor Popular Categories'} 
                icon={true}
                seeAll={seeAll}
                handleCategoryFilter={handleCategoryFilter}
                filter={filter}
                name={'category'}
                ></SectionHeading>

                <Grid container className="wrapper_container category">
                    {
                        categories.length > 0 && categories.map((item ,index) => (
                            <Grid item key={index} xs={6} sm={4} md={2} lg={2}>
                                <div className={styles.category_Container} style={{ marginBottom : '20px' }}>
                                    <Image src={`${baseUrl}${item.image}`} alt={item.alt} width='100' height='100' style={{ boxShadow : theme.shadows[2] }}></Image>
                                   <Link href={'/'}>
                                   <Typography variant="body2" style={{ display:'flex',alignItems : 'center',justifyContent : 'center' , color : theme.palette.text.primary }}>{item.name}     <KeyboardDoubleArrowRightIcon style={{ fontSize : '14px' ,  color : theme.palette.text.primary  }}></KeyboardDoubleArrowRightIcon> 
                                   </Typography>
                                   </Link>
                                </div>
                            </Grid>
                        ))
                    }

                    {
                        categories.length == 0 && <Grid xs={12}>
                            <Typography variant="body2">No Category Found</Typography>
                        </Grid>
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Category;