import { PlaneBtn, PrimaryBtn } from "@/src/components/shared/styled/component";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {useTheme} from "@mui/material/styles"

const NotFound = () => {
    const theme = useTheme();
    return (
        <Box className="wrapper">
            <Container>
                    <Box style={{ textAlign : 'center' , marginBottom : '80px' }}>
                        <Image src={'/404.svg'} alt="contact-us" width={300} height={300} style={{ objectFit :'contain' }}></Image>
                        <Typography variant="h1" style={{ fontSize : "24px" }}>Oops, Page Not Found</Typography>
                        <br></br>
                        <Link href={'/products'} passHref><PrimaryBtn>Continue Shopping</PrimaryBtn></Link>
                    </Box>

                    
            </Container>
        </Box>
    )

}

export default NotFound;