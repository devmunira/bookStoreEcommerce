import {Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Container} from "@mui/system";
import Image from "next/image";
import SectionHeading from "../shared/ui/SectionHeading";
import styles from '../../styles/category.module.css'
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {Skeleton} from '@mui/material';
import {SecendaryBtn} from "../shared/styled/component";
import { useRouter } from 'next/router'
import useSearch from '@/src/hooks/useSearch';

const Category = ({
    isLoading,
    categories,
    baseUrl,
    seeAll = true,
    handleCategoryFilter,
    filter
}) => {
    const theme = useTheme()
    const router = useRouter()
    const {setFilter , filter : searchFilter} = useSearch();
    const handleRoute = (id) => {
        setFilter({...searchFilter , category : [...searchFilter.category , id]})
        router.push({
            pathname: '/products',
            query: { ...router.query, category: id }
          });
    }
    return (
        <div className="wrapper">
            <Container>
                <SectionHeading
                    text={'BoiGhor Popular Categories'}
                    icon={true}
                    seeAll={seeAll}
                    url={'/categories'}
                    handleCategoryFilter={handleCategoryFilter}
                    filter={filter}
                    name={'category'}></SectionHeading>

                <Grid container className="wrapper_container category">
                    {categories?.length > 0 && categories.map((item, index) => (
                        <Grid item key={index} xs={6} sm={4} md={2} lg={2}>
                            <div
                                className={styles.category_Container}
                                style={{
                                marginBottom: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    src={`${baseUrl}${item.image}`}
                                    alt={item.alt}
                                    width='100'
                                    height='100'
                                    style={{
                                    boxShadow: theme.shadows[2]
                                }}></Image>
                                
                                <SecendaryBtn onClick={() => handleRoute(item.id)} style={{fontSize : "12px"}}>{item?.name}</SecendaryBtn>
                            </div>
                        </Grid>
                    ))
}

                    {!isLoading && categories?.length == 0 && <Grid xs={12}>
                        <Typography variant="body2">No Category Found</Typography>
                    </Grid>
}

                    {isLoading && [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5
                    ].map((item, index) => (
                        <Grid item key={index} xs={6} sm={4} md={2} lg={2}>
                            <div
                                className={styles.category_Container}
                                style={{
                                marginBottom: '20px'
                            }}>
                                <Skeleton variant="circular" animation="wave" width={120} height={120}/>
                            </div>
                        </Grid>
                    ))
}
                </Grid>
            </Container>
        </div>
    )
}

export default Category;