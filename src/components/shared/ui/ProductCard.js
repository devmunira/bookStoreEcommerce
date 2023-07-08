import {Badge, Box, Button, Checkbox, Chip, FormControlLabel, FormGroup, Select, Typography} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {CartBtn} from '../styled/component'
import Link from 'next/link'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from "../../../styles/productcard.module.css"
import {useTheme} from "@mui/material/styles";
import {BsCartCheck, BsCartPlus} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import {getAllWishListItem, manageWishList} from '@/src/redux/wishList/actions'
import {FavoriteSharp} from '@mui/icons-material'
import {getAllItem} from '@/src/redux/cart/actions'
import { Variant } from '@/src/constant/Variant'
import useToggle from '@/src/hooks/useToggle'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { CustomSelect } from '../styled/Form'

const ProductCard = ({item}) => {
    const theme = useTheme()
    const wishList = useSelector(state => state.wishList)
    const cart = useSelector(state => state.cart)
    const [toggle , setToggle] = useState({
        show : false,
        component : '',
    })
    const dispatch = useDispatch();

    const handleWishList = (e, id , val) => {
        e.preventDefault()
        dispatch(getAllWishListItem(id , val))
        setToggle({show : false , component : ''})

    }

    const hanldeAddToCart = (e , id , val) => {
        e.preventDefault()
        dispatch(getAllItem(id , val))
        setToggle({show : false , component : ''})
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
                    toggle.show && <Box className={styles.product__variation__overly}>
                       <CustomSelect name='variation' 
                       onChange={
                         toggle.component == 'Wish' ?
                         (e) => handleWishList(e, item.id , e.target.value) :
                         (e) => hanldeAddToCart(e , item.id , e.target.value)     
                        }     
                        >
                            <option value={''}>--Select Variant--</option>
                            {Variant.map((item,index) => <option key={index} value={item}>{item}</option>)}
                       </CustomSelect>
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
                    <CartBtn onClick={() => setToggle({show : true , component : 'Cart'})}>
                           {
                             cart?.items?.findIndex(i => i.id === item.id) !== -1 ?
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
                        onClick={(e) => {
                            e.preventDefault()
                            setToggle({show : true , component : 'Wish'})
                        }}
                        sx={{
                        cursor: "pointer"
                    }}>
                        {wishList?.find(i => i.id ===item.id)
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