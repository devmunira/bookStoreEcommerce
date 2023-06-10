import React, { useState } from 'react'
import Search from '../shared/ui/Search'
import CategoryFilter from '../shared/ui/CategoryFilter'
import { Card } from '@mui/material'
import { Input, Label } from '../shared/styled/Form'
import SidebarTitle from '../shared/ui/SidebarTitle'

const categories = [
  {item : 'Nobel' , count : 120} , 
  {item : 'Fictions' , count : 450} ,
  {item : 'Love Story' , count : 75} ,
  {item : 'Islamic Books' , count : 190} ,
  {item : 'Non-fictions' , count : 230} ,
  {item : 'Poem' , count : 159} ,
  {item : 'AI' , count : 845} ,
  {item : 'Nobel' , count : 35} ]
const ProductSideBar = ({categories,authors,handleInput , handleCheckbox , search, filter,isLoading}) => {
  return (
    <div>
        <Search handleFilter={handleInput} search={search}></Search>
        <br></br>
        <CategoryFilter  isLoading={isLoading} handleFilter={handleCheckbox} items={categories} name={'category'} heading={'Filter By Category'}></CategoryFilter>
        <br></br>
        <CategoryFilter isLoading={isLoading} handleFilter={handleCheckbox} items={authors} name={'author'} heading={'Filter By Author'}></CategoryFilter>
        <br></br>
        <Card sx={{ p:2 }}>
          <SidebarTitle text={'Filter by price range'}></SidebarTitle>
        <Input type='range' max={3000} min={100} step={1} value={filter.price} name='price' onChange={handleInput} style={{ color : 'red' }}></Input>
        <Label>Price:<strong>{filter.price}</strong></Label>
        </Card>
        
    </div>
  )
}

export default ProductSideBar