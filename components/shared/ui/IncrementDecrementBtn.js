import { Box, Input } from '@mui/material'
import React from 'react'
import { MiniBtn, MiniInput } from '../styled/Form'

const IncrementDecrementBtn = () => {
  return (
    <Box className="justifyStartAlignCenter" sx={{ gap : 0 }}>
        <MiniBtn>+</MiniBtn>
        <MiniInput value={1} style={{ width : '40px' }}></MiniInput>
        <MiniBtn>-</MiniBtn>
    </Box>
  )
}

export default IncrementDecrementBtn