import React from 'react'
import SidebarTitle from '../shared/ui/SidebarTitle'
import { Card } from '@mui/material'
import SmallPostCard from './SmallPostCard'

const RecentPost = () => {
  return (
    <Card sx={{ p : 4 }}>
        <SidebarTitle text={'Featured Post'}></SidebarTitle>
        {
            [1,2,3,4].slice(0,3).map((item,index) => <SmallPostCard key={index}></SmallPostCard>)
        }
    </Card>
  )
}

export default RecentPost