import { Box, Container, Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import { Label } from "@/src/components/shared/styled/Form";
import { PlaneBtn, PrimaryBtn } from "@/src/components/shared/styled/component";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { FormGroup , Input } from "@/src/components/shared/styled/Form";

const ResetPassword = () => {
    const theme = useTheme()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
       <Box className="wrapper">
            <Container>
                <Grid container style={{ justifyContent : 'center'  }}>
                    <Grid item xs={12} sm={12} md={6} lg={4} style={{  boxShadow : theme.shadows[5] , padding : '40px 20px' , background : theme.palette.background.light }}>
                    <Typography variant="h1" style={{ fontSize : '18px' , textAlign : 'center', paddingBottom : '20px' }}>Reset account Password</Typography>
                        <form>
                          <FormGroup style={{ position : 'relative' }}>
                            <Label>New Password</Label>
                            <Input  placeholder="**********"
                            type={showPassword ? 'text' : 'password'}
                            ></Input>
                            <InputAdornment style={{ position :  'absolute' , left : '88%' , top : '45px' }}>
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                          </FormGroup>

                          <FormGroup style={{ margin : '10px 0px' }}>
                            <PrimaryBtn style={{ width : '100%' }}>Create New Password</PrimaryBtn>
                          </FormGroup>
                        </form>
                    </Grid>
                </Grid>
            </Container>
       </Box>
    )
    
}

export default ResetPassword;