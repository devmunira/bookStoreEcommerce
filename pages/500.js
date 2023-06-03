import { useRouter } from 'next/router';
import { PrimaryBtn } from "@/src/components/shared/styled/component";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const ServerError = () => {
  const error = useRouter().query;
    return (
        <Box className="wrapper">
            <Container>
                    <Box style={{ textAlign : 'center' , margin : '80px auto' }}>
                    <Typography variant='h1'>500</Typography>
                        <Typography variant="h1" style={{ fontSize : "24px" }}>{error.message}</Typography>
                        <br></br>
                        <Link href={'/products'} passHref><PrimaryBtn>Back to Home Page</PrimaryBtn></Link>
                    </Box>   
            </Container>
        </Box>
    )
}

export default ServerError