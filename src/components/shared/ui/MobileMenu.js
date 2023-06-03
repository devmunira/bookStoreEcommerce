import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import {Close, ShoppingCartOutlined} from '@mui/icons-material';
import {IconBtn} from '../styled/component';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function MobileMenu({menuItems, state, toggleDrawer, handleTheme, selectedTheme}) {
    const list = (menuItems) => (
        <Box
            sx={{
            width: '100%'
        }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}>
            <List>
                <ListItem>
                    <ListItemButton
                        onClick={toggleDrawer()}
                        style={{
                        textAlign: "right",
                        float: "right",
                        display: "block",
                        padding: 0
                    }}>
                        <Close
                            style={{
                            fontSize: "16px"
                        }}></Close>
                    </ListItemButton>
                </ListItem>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            style={{
                            paddingRight: "100px"
                        }}>
                            <Link href={item.link} passHref><ListItemText primary={item.title}/></Link>
                        </ListItemButton>
                    </ListItem>
                ))}

                <Box sx={{ padding : "10px" , display : "flex", justifyContent : "flex-start" , gap : "20px"  }}>
                    <IconBtn>
                        <ShoppingCartOutlined></ShoppingCartOutlined>
                    </IconBtn>

                    <IconBtn>
                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    </IconBtn>

                    <IconBtn onClick={handleTheme}>
                        {selectedTheme == 'light'
                            ? <DarkModeIcon></DarkModeIcon>
                            : <LightModeIcon></LightModeIcon>
}
                    </IconBtn>
                </Box>
            </List>
        </Box>
    );

    return (
        <div style={{
            width: '100%'
        }}>
            <React.Fragment>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state.left}
                    onClose={toggleDrawer()}
                    onOpen={toggleDrawer()}>
                    {list(menuItems)}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}