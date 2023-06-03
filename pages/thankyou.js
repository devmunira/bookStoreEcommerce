import SEO from '@/src/components/layout/SEO';
import {PrimaryBtn} from '@/src/components/shared/styled/component';
import {Box, Container, Typography} from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ThankYou = () => {
    return (
        <Box className="wrapper">
            <Head>
                <SEO
                    title={'Home'}
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
                        src={'/thank-you.svg'}
                        alt="contact-us"
                        width={300}
                        height={300}
                        style={{
                        objectFit: 'contain'
                    }}></Image>
                    <br></br>
                    <Typography
                        variant="h1"
                        style={{
                        fontSize: "28px"
                    }}>Thanks for Shoping with us!</Typography>
                    <p>You have brought a big smile to our small Business
                        <br></br>Come soon again!</p>
                    <br></br>
                    <Link href={'/products'}>
                        <PrimaryBtn>Continue Shopping</PrimaryBtn>
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default ThankYou