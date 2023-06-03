import { Typography } from '@mui/material'
import React from 'react'

const SidebarTitle = ({text}) => {
  return (
    <Typography variant='body2' sx={{ fontWeight : 'bold' }}>{text}</Typography>
  )
}

export default SidebarTitle