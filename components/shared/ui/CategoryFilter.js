import { Box, Card, FormControlLabel, Typography, createStyles, withStyles } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { blue } from '@mui/material/colors';
import SidebarTitle from './SidebarTitle';

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    width: '100%',
  }
}

const CategoryFilter = ({categories,heading = 'Filter By CheckBox'}) => {
  const theme = useTheme()
  return (
    <Card sx={{ padding : 2 , maxHeight : '320px' , overflowY :'scroll' }}>
    <SidebarTitle text={heading}></SidebarTitle>
        <FormGroup>
           {
            categories.length > 0 && categories.map((item,index) => <FormControlLabel 
            sx={{ position : 'relative',width:'100%',...formControlLabelStyle }}
            key={index} 
            control={<Checkbox value={item.item} name='category[]' sx={{
            color: theme.palette.text.main,
            '& .MuiSvgIcon-root': { fontSize: 20 },
            '&.Mui-checked': {
              color: theme.palette.text.light,
            },
          }}/>}    
            label={<Box className={'justifySpaceBetweenAlignCenter'} sx={{ display: 'inline-block',width:'100%' }}>
              <Typography sx={{ fontSize : '13px' , fontWeight : 'bold' , color : theme.palette.text.secondary }}>{item.item}</Typography>
              <Typography varient="body1" sx={{ fontSize : '12px' , fontWeight : 'bold' }}>({item.count})</Typography>
            </Box>} />)
           }
      </FormGroup>
    </Card>
  )
}

export default CategoryFilter