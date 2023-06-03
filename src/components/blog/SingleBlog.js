import {Box, Container} from '@mui/material'
import React from 'react'
import {Grid} from 'swiper'
import Breadcrumb from '../shared/ui/Breadcrumb'
import SortGroup from '../shared/ui/SortGroup'
import BlogSidebar from './sidebar'
import PaginationLink from '../shared/ui/pagination'

const SingleBlog = () => {
    return (
        <Box className="wrapper">
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={3} lg={2} item>
                        <Breadcrumb
                            breadcrumb={{
                            title: 'Blog',
                            link: '/blog'
                        }}></Breadcrumb>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={10} item>
                        <SortGroup></SortGroup>
                    </Grid>
                </Grid>
                <Box className="wrapper_container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <BlogSidebar></BlogSidebar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Grid container spacing={2}></Grid>
                            <PaginationLink></PaginationLink>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default SingleBlog