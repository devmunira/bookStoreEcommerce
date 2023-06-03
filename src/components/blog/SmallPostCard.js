import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import Link from 'next/link'
import {useTheme} from '@mui/material'

const SmallPostCard = () => {
    const theme = useTheme();
    return (
        <Link href={'/'}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <CardMedia
                    component="img"
                    sx={{
                    width: 50,
                    height: 50
                }}
                    image="/blog.jpg"
                    alt="Live from space album cover"/>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <CardContent
                        sx={{
                        flex: '1 0 auto'
                    }}>
                        <Typography
                            component="div"
                            variant="body1"
                            sx={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: theme.palette.text.primary
                        }}>
                            Live From Space
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            sx={{
                            fontSize: '10px'
                        }}>
                            By Munira , 01/02/23
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
        </Link>

    )
}

export default SmallPostCard