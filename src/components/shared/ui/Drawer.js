import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Button, Typography } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';
import Image from 'next/image';
import {useTheme} from '@mui/material/styles';
import { PrimaryBtn, SecBtn } from '../styled/component';
import IncrementDecrementBtn from './IncrementDecrementBtn';


export default function CustomDrawer({toggleDrawer,anchor,bstate : state , ids , title , items }) {
  const theme = useTheme();
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
    >
    <Box className="justifySpaceBetweenAlignCenter">
         <Typography variant='body1' className='justifyStartAlignCenter'> <ShoppingBagOutlined></ShoppingBagOutlined> Your {title}</Typography>

         <Typography variant='body2' style={{ fontSize : '12px' }}>Total : 1000 Tk</Typography>
    </Box>
      <List>
        {items && items.length > 0 && items.map((item, index) => (
          <>
          <ListItem key={index} disablePadding >
            <ListItemButton sx={{ gap :1 }}>
              <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.thumbnail}`} alt="Cart Image" width={50} height={50}></Image>
              <Box>
                  <Typography variant='body2' style={{ fontSize : '13px' , padding : 0 , lineHeight : 1.4, margin : 0}}>{item.title}</Typography>
                  <Typography variant='body1' style={{ fontSize : '12px' , margin : 0 , padding : 0 , color : theme.palette.text.secondary }}>Price: {item.price}</Typography>
                  <IncrementDecrementBtn></IncrementDecrementBtn>
                  
                  {title == 'Wish List' && <Button size='small' sx={{ fontSize : '10px'}}>Add to Cart</Button>}
                  <Button size='small' sx={{ fontSize : '10px'}}>Remove</Button>
              </Box>
            </ListItemButton>
          </ListItem>
          </>
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