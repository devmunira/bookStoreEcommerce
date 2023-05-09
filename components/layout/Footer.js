import { Box, Container  , Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import FooterMenu from "../partials/FooterMenu";
import Image from "next/image";
import { FacebookRounded, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import SecondaryFooter from "./SecondaryFooter";

const footerMenuOne = {
    title : 'Qucik Links',
    menus : ['Home','About','Shop','Blog','Contacts'],
}


const footerMenuTwo = {
    title : 'Shop By',
    menus : ['Book Category','Forgin Books','Best Selling','Extra Discount','Boi Mela 2023'],
}



const footerMenuThree = {
    title : 'Supports',
    menus : ['Order Track','Contact us','Find my Product','FAQ','Help Desk'],
}

const footerMenuFour = {
    title : 'Policy',
    menus : ['Terms of Use','Privacy Policy','Happy Return','Refund Policy'],
}


const footerMenuFive = {
    title : 'Contact with Us',
    menus : ['Phone: +8801881959920','Whatsapp: +8801722924044','Email: info@boighor.com','Address: Road No #2, House 3', 'Baridhara' , 'Dhaka, Bangladesh'],
}


const Footer = () => {
    const theme = useTheme()
    return (
        <>
            <Box className="wrapper"  style={{ backgroundColor : '#010d14' , flexGrow : 1 }}>
            <Container className="wrapper_container">
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={2} sx={{ paddingLeft : "50px" }}>
                        <Box style={{ width : '200px' , height : 'auto' }}>
                        <Image src="/logo.png" alt="logo.png" width={1000} height={1000} style={{ width : '100%', height : '100%' }}></Image>
                        <Typography variant="h6" style={{ color : '#eee' , fontSize :'12px' , padding : '15px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laboriosam eaque officiis vero!
                        </Typography>
                        <ul style={{ display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' }}>
                            <li>                     
                                <FacebookRounded style={{ color : '#eee' }}></FacebookRounded>                            
                            </li>
                            <li>                     
                                <Twitter style={{ color : '#eee' }}></Twitter>                            
                            </li>
                            <li>                     
                                <Instagram style={{ color : '#eee' }}></Instagram>                            
                            </li>
                            <li>                     
                                <LinkedIn style={{ color : '#eee' }}></LinkedIn>                            
                            </li>
                        </ul>
                        </Box>
                    </Grid>
                    <FooterMenu item={footerMenuOne}></FooterMenu>
                    <FooterMenu item={footerMenuTwo}></FooterMenu>
                    <FooterMenu item={footerMenuThree}></FooterMenu>
                    <FooterMenu item={footerMenuFour}></FooterMenu>
                    <FooterMenu item={footerMenuFive}></FooterMenu>
                </Grid>
            </Container>
        </Box>
        <SecondaryFooter></SecondaryFooter>
        </>
    )
}

export default Footer;