import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { Input, MiniBtn } from '../styled/Form';
import {useTheme} from '@mui/material/styles';
import { PrimaryBtn, SecBtn } from '../styled/component';
import IncrementDecrementBtn from './IncrementDecrementBtn';

const products = [
    {
        product_name  : 'Paradocxicsl Sajid',
        price : 200,
        qnty  : 5,
        image : '/book.png'

    },
    {
        product_name  : 'Paradocxicsl Sajid',
        price : 200,
        qnty  : 5,
        image : '/book.png'

    }

]

export default function CustomDrawer({toggleDrawer,anchor,state}) {
const theme = useTheme();
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
    >
    <Box className="justifySpaceBetweenAlignCenter">
         <Typography variant='body1' className='justifyStartAlignCenter'> <ShoppingBagOutlined></ShoppingBagOutlined> Your Cart</Typography>

         <Typography variant='body2' style={{ fontSize : '12px' }}>Total : 1000 Tk</Typography>
    </Box>
      <List>
        {products.map((item, index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton>
              <Image src={item.image} alt="Cart Image" width={50} height={50}></Image>
              <Box>
              <Typography variant='body2' style={{ fontSize : '13px' }}>{item.product_name}</Typography>
              <Typography variant='body1' style={{ fontSize : '12px' , color : theme.palette.text.secondary }}>Price: {item.price}</Typography>
               <IncrementDecrementBtn></IncrementDecrementBtn>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ display : 'flex' }}>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
        <Box style={{ padding : '20px'  , display : 'flex' , flexDirection : 'column' , alignContent : 'space-between'}}>
            {list(anchor)}
          <Box>
              <Box style={{ display : 'flex' , justifyContent : 'center',  flexDirection : 'column', gap : 10  }}>
                  <SecBtn>View Cart</SecBtn>
                  <PrimaryBtn>CheckOut</PrimaryBtn>
              </Box>
          </Box> 
          </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}