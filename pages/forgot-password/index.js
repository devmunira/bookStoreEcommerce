import { Box, Container, Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import { PlaneBtn, PrimaryBtn } from "@/src/components/shared/styled/component";
import Link from "next/link";
import React from "react";
import { Label } from "@/src/components/shared/styled/Form";
import { FormGroup , Input } from "@/src/components/shared/styled/Form";

const ForgotPassword = () => {
    const theme = useTheme()
    return (
       <Box className="wrapper">
            <Container>
                <Grid container style={{ justifyContent : 'center'  }}>
                    <Grid item xs={12} sm={12} md={6} lg={4} style={{  boxShadow : theme.shadows[5] , padding : '40px 20px' , background : theme.palette.background.light }}>
                    <Typography variant="h1" style={{fontSize : '18px' , textAlign : 'center', paddingBottom : '20px' }}>Good to see you again</Typography>
                        <form>
                          <FormGroup>
                            <Label>Email Address</Label>
                            <Input type="text" placeholder="ex:munira@example.com"></Input>
                          </FormGroup>

                          <FormGroup style={{ margin : '10px 0px' }}>
                            <Link href={'/forgot-password/?token="ncshbfafh632hfh8rfweh"'} passHref>
                                <PrimaryBtn style={{ width : '100%' }}>Get Verification Link</PrimaryBtn>
                            </Link>
                          </FormGroup>
                        </form>

                        <Typography variant="body2">Remember your password? <Link href={'/login'}><PlaneBtn>Sign In</PlaneBtn></Link></Typography>
                    </Grid>
                </Grid>
            </Container>
       </Box>
    )
    
}

export default ForgotPassword;