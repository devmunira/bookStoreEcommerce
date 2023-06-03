import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Author = () => {
  return (
    <Card className='justifyStartAlignCenter' style={{ gap : 20 , padding : '20px' }}>
        <Image src={'/author.webp'} height={100} width={100} alt=''></Image>
        <Box>
            <Typography variant='h6'>Arif Azad</Typography>
            <Typography variant='body1'> <strong>102 Books</strong> </Typography>
            <Typography variant='body2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolorum aut rem porro culpa magnam animi ducimus sit architecto eius. Neque officia aspernatur assumenda unde consequuntur blanditiis animi totam mollitia aliquam quod accusamus perferendis, dicta atque praesentium architecto ducimus illum deserunt est ratione eveniet nesciunt error modi similique tenetur! Quidem vel consequuntur quos, odio, minima tenetur recusandae optio non ipsam ut est deserunt et? Unde, vitae? Illum harum dolor praesentium officiis earum rerum aut dolorum cupiditate iusto quos asperiores fuga, repudiandae voluptates quam vero quas inventore esse fugiat assumenda in quae et. Quis praesentium voluptatem magnam vitae, soluta corrupti! Ipsam.
            </Typography>
        </Box>
    </Card>
  )
}

export default Author