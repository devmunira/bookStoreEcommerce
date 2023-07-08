import { Box, Input } from '@mui/material'
import React from 'react'
import { MiniBtn, MiniInput } from '../styled/Form'
import {useDispatch, useSelector} from 'react-redux'
import { countTotal, decrementQnty, increaemntQnty } from '@/src/redux/cart/actions'

const IncrementDecrementBtn = ({item}) => {
  const dispatch = useDispatch()
  
  const handleIncreament = (item) => {
    dispatch(increaemntQnty(item))
    dispatch(countTotal())
  }
  const handleDecreament = (item) => {
    dispatch(decrementQnty(item))
    dispatch(countTotal())
  }
  return (
    <Box className="justifyStartAlignCenter" sx={{ gap : 0 }}>
        <MiniBtn onClick={() => handleIncreament(item)}>+</MiniBtn>
        <MiniInput value={item.qnty ? item.qnty : 1} style={{ width : '40px' }}></MiniInput>
        <MiniBtn onClick={() => handleDecreament(item) }>-</MiniBtn>
    </Box>
  )
}

export default IncrementDecrementBtn