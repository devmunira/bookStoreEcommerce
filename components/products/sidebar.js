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
const ProductSideBar = () => {
  const [range  ,setRange] = useState(500);
  return (
    <div>
        <Search></Search>
        <br></br>
        <CategoryFilter categories={categories} heading={'Filter By Category'}></CategoryFilter>
        <br></br>
        <CategoryFilter categories={categories} heading={'Filter By Author'}></CategoryFilter>
        <br></br>
        <Card sx={{ p:2 }}>
          <SidebarTitle text={'Filter by price range'}></SidebarTitle>
        <Input type='range' max={3000} min={100} step={1} value={range} onChange={(e)=>setRange(e.target.value)} style={{ color : 'red' }}></Input>
        <Label>Price:<strong>{range}</strong></Label>
        </Card>
        <br></br>
        <CategoryFilter categories={categories} heading={'Filter By Publisher'}></CategoryFilter>
        
    </div>
  )
}

export default ProductSideBar