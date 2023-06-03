import { Grid } from "@mui/material"
import { Box, Container } from "@mui/system"
import Link from "next/link"
import { useTheme } from '@mui/material/styles';
import { PlaneBtn } from "../shared/styled/component";
import { UseAuthContext } from "@/src/context/AuthContext";
import { removeToken } from "@/src/services/helper";
import { useEffect } from "react";

const Header = ({text}) => {
    const theme = useTheme();
    const {user , setUser} = UseAuthContext();

    const hanldeLogout = (e) => {
        e.preventDefault();
        removeToken();
        setUser('')
    }

   
    return (
        <Box className="section" style={{ background : theme.palette.background.light }}>
            <Container >
                <Grid container sx={{ paddingTop : 1 , paddingBottom : 1 , justifyContent : 'space-between' ,  }}>
                    <Grid item  sx={{ textAlign : {xs : 'center' , sm : 'left'} }}>
                        <Link href={'/'} legacyBehavior>
                            <a style={{ color : theme.palette.text.secondary, fontSize : 12 , lineHeight : 2 }}>{text}</a></Link>
                    </Grid>

                    <Grid item sx={{ display : {xs : 'none', sm :'block' , md:'block',lg:'block'} }}>
                       {user ? <>
                        <PlaneBtn onClick={hanldeLogout}  style={{ fontSize : '12px' }}>My Account /</PlaneBtn>
                        <PlaneBtn onClick={hanldeLogout}  style={{ fontSize : '12px' }}> Logout</PlaneBtn>
                       </> 
                       : 
                       <>
                       <Link href={'/login'} legacyBehavior><PlaneBtn  style={{ fontSize : '12px' }}>Login /</PlaneBtn></Link>
                        <Link href={'/register'} legacyBehavior><PlaneBtn style={{ fontSize : '12px' }}>Register</PlaneBtn></Link>
                       </>}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Header