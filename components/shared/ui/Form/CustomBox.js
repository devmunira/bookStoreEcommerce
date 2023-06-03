import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useTheme} from "@mui/material/styles"

const CustomBox = ({heading,subheading,number,checked}) => {
    const theme = useTheme();
    return (
        <Box
            className="justifySpaceBetweenAlignCenter box"
            style={{
            border: '1px solid',
            borderColor: checked ? theme.palette.primary.main : '#ddd',
            padding: '10px',
            background: theme.palette.background.light,
            borderRadius: '3px'
        }}
        >
            <Box>
                <Typography
                    variant='body1'
                    style={{
                    color: theme.palette.text.primary
                }}>{heading}</Typography>
                <Typography
                    variant='body2'
                    style={{
                    color: theme.palette.text.primary
                }}>{subheading}</Typography>
            </Box>
            <Typography
                variant='body1'
                style={{
                color: theme.palette.text.primary,
                fontWeight: 'bold'
            }}>{number}</Typography>
        </Box>
    )
}

export default CustomBox