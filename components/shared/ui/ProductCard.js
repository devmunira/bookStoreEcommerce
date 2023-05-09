import {Badge, Box, Typography} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {CartBtn} from '../styled/component'
import Link from 'next/link'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from "../../../styles/productcard.module.css"
import {useTheme} from "@mui/material/styles";
import {BsCartCheck} from 'react-icons/bs'

const ProductCard = ({item}) => {
    const theme = useTheme()

    return ( <Box> <Box
        className={styles.product_card}
        style={{
        boxShadow: theme.shadows[1]
    }}>
       <Box className={styles.productImage__container}>
       <Image
            src={item.image
            ? item.image
            : item.thumbnail}
            alt={item.title}
            width={100}
            height={100}></Image>

        <Box className={styles.productImage__overly}>
        </Box>
       </Box>
        <Box className={styles.product_card_content}>
            <Link href={`/products/${item.id}`}>
                <Typography variant="h5" title={item.title} sx={{ cursor : 'pointer' }}>{item
                        .title
                        .slice(0, 20)}</Typography>
                <Typography variant="body1">{'By Arif Azad'}</Typography>
                <Typography variant="h6" style={{ color : theme.palette.primary.main , fontWeight : 'bold' }}>{'$'}{item.price}</Typography>
            </Link>
        </Box>
        <Box className={styles.product_btn}>
            <CartBtn>
                <BsCartCheck
                    style={{
                    fontSize: '22px',
                    fontWeight: 'bold'
                }}></BsCartCheck>
            </CartBtn>
        </Box>
        <Box className={styles.product_badge}>
            <Badge color="primary" badgeContent={'New'}></Badge>
            <FavoriteBorderOutlinedIcon
                style={{
                color: theme.palette.text.primary
            }}></FavoriteBorderOutlinedIcon>
        </Box>
    </Box> </Box>
  )
}

export default ProductCard