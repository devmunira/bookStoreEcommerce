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
import { useDispatch, useSelector } from 'react-redux';
import { countTotal, getAllItem, removeCart } from '@/src/redux/cart/actions';
import { removeItem } from '@/src/redux/wishList/actions';


export default function CustomDrawer({toggleDrawer,anchor, bstate : state , ids , title , items }) {
  const theme = useTheme();
  const dispatch = useDispatch()
  const {count , items : cart} = useSelector(state => state.cart)

  const removeWishList = (item) => {
    dispatch(removeItem(item))
  }

  const removeCartList = (item) => {
    dispatch(removeCart(item))
    dispatch(countTotal())
  }

  const handleAddToCart = (item) => {
    let index = cart.findIndex(i => item.id === i.id);
    let qnty = 1;
    if(index !== -1 && cart[index].variation === item.variation){
      qnty = cart[index].qnty + 1
    }
    dispatch(getAllItem(item.id , item.variation , qnty))
    dispatch(removeItem(item))
    dispatch(countTotal())
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
    >
    <Box className="justifySpaceBetweenAlignCenter">
         <Typography variant='body1' className='justifyStartAlignCenter'> <ShoppingBagOutlined></ShoppingBagOutlined> Your {title}</Typography>

         <Typography variant='body2' style={{ fontSize : '12px' }}> {title == 'Cart List' && `Total : ${count} Tk`} </Typography>
    </Box>
      <List>
        {items && items.length > 0 && items.map((item, index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton sx={{ gap :1 }}>
              <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.thumbnail}`} alt="Cart Image" width={50} height={50}></Image>
              <Box>
                  <Typography variant='body2' style={{ fontSize : '13px' , padding : 0 , lineHeight : 1.4, margin : 0}}>{item.title}</Typography>

                  <Typography variant='body1' style={{ fontSize : '12px' , margin : 0 , padding : 0 , color : theme.palette.text.secondary }}>Price: {item.sale_price || item.price} </Typography>

                  <Typography variant="body2">{item.variation === 'hard_copy' ? 'Hard Copy' : 'E-Book'}</Typography>
                
                  {
                    title == 'Cart List' && <IncrementDecrementBtn item={item}></IncrementDecrementBtn>
                  }
                  
                  {title == 'Wish List' && <Button size='small' sx={{ fontSize : '10px'}} onClick={() => handleAddToCart(item)}>Add to Cart</Button>} 

                  <Button size='small' sx={{ fontSize : '10px'}}
                    onClick={title == 'Wish List' ? () => removeWishList(item) : 
                    () => removeCartList(item)
                  }
                  >Remove</Button>
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
         
        <Box style={{ display : 'flex' , flexDirection : 'column' , alignContent : 'end' ,}}>
            <Box style={{ padding : '20px'}}>
                {list(anchor)}
            </Box>
            <Box>
                <Box style={{ display : 'flex' , justifyContent : 'center',  flexDirection : 'column', gap : 10 , padding : '20px' }}>
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