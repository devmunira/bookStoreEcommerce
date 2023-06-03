import { ArrowUpwardTwoTone } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import { useState } from 'react';


const ScrollToTop = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisible);
  }
  
  

  return (
    <Box onClick={scrollToTop} sx={{ position : 'fixed', bottom : '10px' , right : '30px' ,background :  theme.palette.primary.main ,height : '40px' , width : '40px', borderRadius : '50%' , textAlign : 'center' , lineHeight : '50px' , boxShadow : theme.shadows[5] , display: visible ? 'inline' : 'none' , cursor : 'pointer' }}>
         <ArrowUpwardTwoTone sx={{  color : theme.palette.common.white, height : '20px' }}></ArrowUpwardTwoTone>
    </Box>
  )
}

export default ScrollToTop