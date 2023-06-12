import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {useTheme} from '@mui/material/styles'

const Breadcrumb = ({breadcrumb}) => {
  const theme  = useTheme();
  return (
    <Box sx={{ display : 'flex' , justifyContent : 'flex-start' , gap : 1 , fontSize : '12px' , color : theme.palette.text.secondary }}>
        <Link href={'/'} legacyBehavior><a style={{ color : theme.palette.text.secondary }}>Home</a></Link>
        
        {breadcrumb.map((item,index) => <Link key={index} href={item.link} style={{ color : theme.palette.text.secondary , cursor : 'pointer' }} legacyBehavior><a>{' >> '} {item.title}</a>
       </Link>)}
    </Box>
  )
}

export default Breadcrumb