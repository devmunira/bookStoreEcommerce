import {PlaneBtn} from "@/src/components/shared/styled/component";
import {Box, Card, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {useTheme} from "@mui/material/styles"
import Head from "next/head";
import SEO from "@/src/components/layout/SEO";

const ConatctPage = () => {
    const theme = useTheme();
    return (
        <Box className="wrapper">
            <Head>
                <title>Book Store | Contact</title>
                <SEO
                    title={'Contact Us'}
                    description={'Lorem ipsum'}
                    url={''}
                    twitterCard={''}
                    image={''}></SEO>
            </Head>
            <Container>
                <Box
                    style={{
                    textAlign: 'center',
                    marginBottom: '80px'
                }}>
                    <Image
                        src={'/contact.svg'}
                        alt="contact-us"
                        width={300}
                        height={300}
                        style={{
                        objectFit: 'contain'
                    }}></Image>
                    <Typography variant="h4">Love to hear from you,</Typography>
                    <Typography variant="h6">Get in touch with us</Typography>
                    <Link href={'mailto:muniraweb@gmail.com'}>
                        <PlaneBtn
                            style={{
                            color: theme.palette.primary.main
                            }}>muniraweb@gmail.com</PlaneBtn>
                    </Link>
                </Box>

            </Container>
        </Box>
    )

}

export default ConatctPage;