import {
    Box,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Typography
} from "@mui/material";
import {FormGroup, Input} from "../components/shared/styled/Form";
import {useTheme} from "@mui/material/styles"
import {Label} from "../components/shared/styled/Form";
import {PlaneBtn, PrimaryBtn} from "@/components/shared/styled/component";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import React from "react";
import Head from "next/head";
import SEO from "@/components/layout/SEO";

const LoginPage = () => {
    const theme = useTheme()
    const [showPassword,
        setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box className="wrapper">
            <Head>
                <SEO
                    title={'Home'}
                    description={'Lorem ipsum'}
                    url={''}
                    twitterCard={''}
                    image={''}></SEO>
            </Head>
            <Container>
                <Grid
                    container
                    style={{
                    justifyContent: 'center'
                }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        style={{
                        boxShadow: theme.shadows[5],
                        padding: '40px 20px',
                        background: theme.palette.background.light
                    }}>
                        <Typography
                            variant="h6"
                            style={{
                            fontSize: '18px',
                            textAlign: 'center',
                            paddingBottom: '20px'
                        }}>Good to see you again</Typography>
                        <form>
                            <FormGroup>
                                <Label>Email Address or UserName</Label>
                                <Input type="text" placeholder="ex:munira123"></Input>
                            </FormGroup>

                            <FormGroup
                                style={{
                                position: 'relative'
                            }}>
                                <Label>Password</Label>
                                <Input
                                    placeholder="**********"
                                    type={showPassword
                                    ? 'text'
                                    : 'password'}></Input>
                                <InputAdornment
                                    style={{
                                    position: 'absolute',
                                    left: '88%',
                                    top: '45px'
                                }}>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword
                                            ? <VisibilityOff/>
                                            : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            </FormGroup>

                            <FormGroup className="justifySpaceBetweenAlignCenter">
                                <FormControlLabel
                                    style={{
                                    color: theme.palette.text.secondary,
                                    fontSize: '10px'
                                }}
                                    control={< Checkbox style = {{ color : theme.palette.primary.main }}defaultChecked />}
                                    label="Remember Me"/>

                                <Link href={'/forgot-password'} passHref>
                                    <PlaneBtn
                                        style={{
                                        color: theme.palette.secondary.main
                                    }}>Forgot Password</PlaneBtn>
                                </Link>
                            </FormGroup>

                            <FormGroup
                                style={{
                                margin: '10px 0px'
                            }}>
                                <PrimaryBtn
                                    style={{
                                    width: '100%'
                                }}>Log In</PrimaryBtn>
                            </FormGroup>
                        </form>

                        <Typography variant="body2">Do not have an account?
                            <Link href={'/'} passHref>
                                <PlaneBtn>Sign Up</PlaneBtn>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )

}

export default LoginPage;