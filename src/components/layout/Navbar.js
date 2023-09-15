import {Badge, Container, Grid} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import SeacrhBox, {SearchBtn} from "../shared/styled/SeacrhBox";
import {useTheme} from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuBar from "./Menubar";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {IconBtn} from "../shared/styled/component";
import useToggle from "@/src/hooks/useToggle";
import Link from "next/link";
import {useState} from "react";
import React from "react";
import {Search} from "@mui/icons-material";
import SearchModal from "../shared/ui/SearchModal";
import useOpenClose from "@/src/hooks/useOpenClose";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MobileMenu from "../shared/ui/MobileMenu";
import {pages} from "@/src/constant/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import CustomDrawer from "../shared/ui/Drawer";
import { getAllItem } from "@/src/redux/wishList/actions";
import { countTotal } from "@/src/redux/cart/actions";
import { useRouter } from "next/router";

const Navbar = ({toggleTheme, selectedTheme}) => {
    const theme = useTheme()
    const router = useRouter()
    const wishList = useSelector(state => state.wishList)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const handleTheme = () => {
        toggleTheme()
    }
    // Toggle Search Box Data UI
    const {handleOpen, SearchOpen, handleClose: SearchClose} = useOpenClose(false);
    // Handle Modal Show and Hide
    const [open,setOpen] = useState(false);
    // Hanlde Drawer for Wishlist & Cart
    const [duplex,setDuplex] = useState('Cart');

    const handleClose = () => setOpen(false);
    // Handle Drawer
    const [state,
        setState] = React.useState({top: false, left: false, bottom: false, right: false});

    const toggleDrawer = (anchor, open , type) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }   
        setState({
            ...state,
            [anchor]: open
        });
        setDuplex(type)
        dispatch(countTotal())
    };
    
    // Handle Mobile Menu
    const {toggle, setToggle, state: menuState , menuToggle} = useToggle();

    // Search Search Bar
    const handleSearch = (e) => {
        e.preventDefault()
        router.query.search = e.target.search.value;
        console.log(router)
        router.push({pathname : '/products' , query: router.query})
    }

    return ( <> <Box
        className="section"
        style={{
        backgroundColor: theme.palette.background.dark,
    }}>
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid item>
                    <Image
                        src={selectedTheme == 'light'
                        ? 'https://rails-assets-us.bookshop.org/ds/images/logo.041f4577edde0efff6b67907832d' +
                            '4c3dfd52407b.svg'
                        : '/logo.png'}
                        alt="Logo"
                        width={200}
                        height={60}
                        style={{
                        objectFit: 'contain'
                    }}
                        priority></Image>
                </Grid>

                <Grid
                    item
                    md={6}
                    sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block',
                        lg: 'block'
                    },
                    position: 'relative'
                }}>
                    <Box>
                       
                        <form style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }} method="GET" onSubmit={(e) => handleSearch(e)}>
                            <SeacrhBox placeholder="search by books" name="search"></SeacrhBox> 
                                <SearchBtn type="submit">
                                <SearchIcon></SearchIcon>
                            </SearchBtn>
                        </form>


                        {toggle == true && (
                            <Box
                                style={{
                                background: theme.palette.background.light,
                                padding: '10px',
                                position: 'absolute',
                                zIndex: 9999,
                                width: '462px',
                                top: '39px',
                                left: '10%'
                            }}>
                                <ul>
                                    <l>
                                        <Link
                                            href={'/'}
                                            style={{
                                            color: theme.palette.text.primary
                                        }}>Hi</Link>

                                    </l>
                                </ul>
                            </Box>
                        )
}

                    </Box>
                </Grid>

                <Grid
                    item
                    style={{
                    display: 'flex',
                    gap: 20
                }}>
                    <IconBtn
                        sx={{
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'none'
                        }
                    }}
                        onClick={handleOpen}>
                        <Search></Search>
                    </IconBtn>

                    <Badge onClick={toggleDrawer('right', true , 'Wish')} badgeContent={wishList?.length} color="primary" sx={{
                        display: {
                            sm: 'none',
                            xs: 'none',
                            md: 'block'
                        }
                        }}>
                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    </Badge>

                    <Badge onClick={toggleDrawer('right', true , 'Cart')} badgeContent={ cart.items ? Object.keys(cart.items).length : 0} color="primary" sx={{
                        display: {
                            sm: 'none',
                            xs: 'none',
                            md: 'block'
                        }
                        }}>
                       <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    </Badge>
                   
                    <IconBtn
                        onClick={handleTheme}
                        sx={{
                        display: {
                            sm: 'none',
                            xs: 'none',
                            md: 'block'
                        }
                    }}>
                        {selectedTheme == 'light'
                            ? <DarkModeIcon></DarkModeIcon>
                            : <LightModeIcon></LightModeIcon>
}
                    </IconBtn>
                    <IconBtn
                        sx={{
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'block',
                            lg: 'none'
                        }
                    }}
                        onClick={menuToggle()}>
                        <MenuSharpIcon></MenuSharpIcon>
                    </IconBtn>
                </Grid>
            </Grid>
        </Container>
        <MobileMenu state={menuState} toggleDrawer={menuToggle} menuItems={pages} handleTheme={handleTheme} selectedTheme={selectedTheme}></MobileMenu>
        <MenuBar></MenuBar>
        <SearchModal open={SearchOpen} handleClose={SearchClose}></SearchModal>
        <CustomDrawer items={duplex == 'Cart' ? cart?.items : wishList} toggleDrawer={toggleDrawer} anchor={'right'} bstate={state} title={duplex == 'Cart' ? 'Cart List' : 'Wish List' } ids={duplex === 'Wish' ? wishList?.data : []}></CustomDrawer>
    </Box> 
    </>
    )
}

export default Navbar;