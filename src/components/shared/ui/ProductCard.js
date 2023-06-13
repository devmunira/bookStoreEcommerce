import {Badge, Box, Button, Checkbox, Chip, FormControlLabel, FormGroup, Typography} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {CartBtn} from '../styled/component'
import Link from 'next/link'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from "../../../styles/productcard.module.css"
import {useTheme} from "@mui/material/styles";
import {BsCartCheck, BsCartPlus} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import {manageWishList} from '@/src/redux/wishList/actions'
import {FavoriteSharp} from '@mui/icons-material'
import {getAllItem} from '@/src/redux/cart/actions'
import { Variant } from '@/src/constant/Variant'
import useToggle from '@/src/hooks/useToggle'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      width: '100%',
    }
  }

const ProductCard = ({item}) => {
    const theme = useTheme()
    const wishList = useSelector(state => state.wishList)
    const cart = useSelector(state => state.cart)
    const {toggle , setToggle} = useToggle()
    const [variartion , setVariation] = useState('');
    const dispatch = useDispatch();
    const handleWishList = (e, payload) => {
        e.preventDefault();
        dispatch(manageWishList(payload))
    }

    console.log(variartion)
    const hanldeAddToCart = (id) => {
        // setToggle(true)
        // if(variartion){
        //     dispatch(getAllItem(id))
        // }else{
        //     toast('Please Check Variation')
        // }
    }

    return (
        <Box>
            <Box
                className={styles.product_card}
                style={{
                boxShadow: theme.shadows[1]
            }}>
                <Box className={styles.productImage__container}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item
                        ?.thumbnail}`}
                        alt={item.title}
                        width={100}
                        height={100}></Image>
                    <Box className={styles.productImage__overly}>
                    </Box>

                   {
                     <Box className={styles.product__variation__overly}>
                        <Typography>Select Variation</Typography>
                        <FormGroup>
                        {
                            Variant.map((item,index) => <FormControlLabel 
                            sx={{ position : 'relative',width:'100%',...formControlLabelStyle }}
                            key={index} 
                            control={<Checkbox value={item} onChange={setVariation(item)} name={'variant'}  sx={{
                            color: theme.palette.text.main,
                            '& .MuiSvgIcon-root': { fontSize: 20 },
                            '&.Mui-checked': {
                            color: theme.palette.text.light,
                            },
                        }}/>}    
                            label={<Box className={'justifySpaceBetweenAlignCenter'} sx={{ display: 'inline-block',width:'100%' }}>
                            <Typography sx={{ fontSize : '13px' , fontWeight : 'bold' , color : theme.palette.text.secondary }}>{item}</Typography>
                            </Box>} />)
                        }

                    </FormGroup>
                    </Box>
                   }

                </Box>
                <Box className={styles.product_card_content}>
                    <Link href={`/products/${item.id}`}>
                        <Typography
                            variant="h5"
                            title={item.title}
                            sx={{
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}>{item.title}</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            p: 0
                        }}>{item.author.name}</Typography>
                        {item.sale_price
                            ? <Box
                                    style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <Typography
                                        variant="body2"
                                        style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 'bold'
                                    }}>{'$'}{item.sale_price}</Typography>
                                    <Typography
                                        style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 'bold'
                                    }}>
                                        <del>{'$'}{item.price}</del>
                                    </Typography>
                                </Box>
                            : <Typography
                                variant="body2"
                                style={{
                                color: theme.palette.primary.main,
                                fontWeight: 'bold'
                            }}>{'$'}{item.price}</Typography>
}
                    </Link>
                </Box>
                <Box className={styles.product_btn}>
                    <CartBtn onClick={() => hanldeAddToCart(item.id)}>
                           {
                            Object.keys(cart.items).includes(item.id.toString()) == true ?
                                <BsCartCheck
                                    style={{
                                    fontSize: '22px',
                                    fontWeight: 'bold'
                                }}></BsCartCheck>
                            :  <BsCartPlus
                                style={{
                                fontSize: '22px',
                                fontWeight: 'bold'
                            }}></BsCartPlus>
                           }
                    </CartBtn>
                </Box>
                <Box className={styles.product_badge}>
                    <Chip
                        color="primary"
                        label={item
                        ?.label}
                        size="small"
                        sx={{
                        fontSize: '10px'
                    }}/>
                    <Link
                        href={'/'}
                        onClick={(e) => handleWishList(e, item
                        ?.id)}
                        sx={{
                        cursor: "pointer"
                    }}>
                        {wishList
                            ?.data
                                ?.includes(item.id)
                                    ? <FavoriteSharp
                                            style={{
                                            color: theme.palette.text.secondary,
                                            fill: theme.palette.primary.main,
                                            textShadow: theme.shadows[10]
                                        }}
                                            className='wishListBtn'></FavoriteSharp>
                                    : <FavoriteBorderOutlinedIcon
                                        style={{
                                        color: theme.palette.text.primary
                                    }}
                                        className='wishListBtn'></FavoriteBorderOutlinedIcon>
}
                    </Link>

                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard