import { Box, Container, Typography } from "@mui/material"
import {useTheme} from "@mui/material/styles"
import {Grid} from "@mui/material";
import Image from "next/image";

const SecondaryFooter = () => {
    const theme = useTheme();
    
    return (
        <Box style={{ background : '#042236' , padding : '10px'}}>
            <Container>
            <Grid container sx={{ justifyContent: 'center' , display : 'flex' , alignItems : 'center' }}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography variant="body1" style={{ color : '#999' }}>All Right Researve @copyright 2023 BioGhor</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Image src={'/payment-methods.png'} priority  alt="payment" width={400} height={50} style={{ objectFit : 'contain' , float : 'right' }} ></Image>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}

export default SecondaryFooter