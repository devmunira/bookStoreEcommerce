import SEO from '@/src/components/layout/SEO'
import CheckoutStepper from '@/src/components/shared/ui/Checkout'
import {Box, Card, Container} from '@mui/material'
import Head from 'next/head'
import React from 'react'

const checkout = () => {
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
                <Card sx={{
                    p: 10
                }}>
                    <CheckoutStepper></CheckoutStepper>
                </Card>
            </Container>
        </Box>
    )
}

export default checkout