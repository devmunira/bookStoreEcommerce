import React from 'react'
import SidebarTitle from '../shared/ui/SidebarTitle'
import { Card } from '@mui/material'
import SmallPostCard from './SmallPostCard'

const RecentPost = ({post}) => {
  return (
    <Card sx={{ p : 2 }}>
        <SidebarTitle text={'Featured Post'}></SidebarTitle>
        {
            post.slice(0,3).map((item,index) => <SmallPostCard key={index}></SmallPostCard>)
        }
    </Card>
  )
}

export default RecentPost