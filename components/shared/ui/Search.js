import React from 'react'
import { Input } from '../styled/Form'
import { Card } from '@mui/material'

const Search = () => {
  return (
    <Card sx={{ padding : 2 }}>
        <Input placeholder='Search with keyword'></Input>
    </Card>
  )
}

export default Search