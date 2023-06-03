import React, { useState } from 'react'
import { Input } from '../styled/Form'
import { Card } from '@mui/material'

const Search = ({handleFilter,search}) => {
  
  return (
    <Card sx={{ padding : 2 }}>
        <Input value={search} placeholder='Search with keyword' name='search' onChange={(e) => handleFilter(e)}></Input>
    </Card>
  )
}

export default Search