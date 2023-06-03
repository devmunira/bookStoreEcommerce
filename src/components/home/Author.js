import {Box, Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Container} from "@mui/system";
import Image from "next/image";
import SectionHeading from "../shared/ui/SectionHeading";
import styles from '../../styles/author.module.css'
import Link from "next/link";

const Author = ({authors,handleCategoryFilter,filter,router}) => {
    const theme = useTheme()
    return (
        <div className="wrapper">
            <Container>
                <SectionHeading text={'BoiGhor Honorable Author'} icon={true}
                seeAll={false}
                name={'authors'}
                handleCategoryFilter={handleCategoryFilter}
                filter={filter}
                router={router}
                ></SectionHeading>

                <Grid container className="wrapper_container author" spacing={2}>
                    {authors.length > 0 && authors.map((item, index) => (
                        <Grid item key={index} xs={6} md={3} lg={2}>
                            <Link href={'/'} passHref>
                                <Box className={styles.author_Container}>
                                    <Box
                                        className={styles.author_image}
                                        style={{
                                        boxShadow: theme.shadows[2]
                                    }}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.image}`}
                                            alt={item.alt}
                                            width={100}
                                            height={100}></Image>
                                        <Box className={styles.author_link}>
                                            <Link href={'/'} legacyBehavior>
                                                <Typography
                                                    variant="body2"
                                                    style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>{item.name}
                                                    ({item.count})
                                                </Typography>
                                            </Link>
                                        </Box>

                                    </Box>

                                </Box>
                            </Link>
                        </Grid>
                    ))
}
                </Grid>
            </Container>
        </div>
    )
}

export default Author;