import {
    Box,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Typography
} from "@mui/material";
import {ErrorText, FormGroup, Input} from "../components/shared/styled/Form";
import {useTheme} from "@mui/material/styles"
import {Label} from "../components/shared/styled/Form";
import {PlaneBtn, PrimaryBtn} from "@/src/components/shared/styled/component";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import React, {useState} from "react";
import Head from "next/head";
import SEO from "@/src/components/layout/SEO";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import axios from "axios";
import { UseAuthContext } from "@/src/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { setToken } from "@/src/services/helper";

const schema = yup.object({
    identifer: yup
        .string()
        .email('Enter an valid email address')
        .required('Email Address is required field'),
    password: yup
        .string()
        .required()
})

const LoginPage = () => {
    const theme = useTheme()
    const router = useRouter();
    // Password Show Hide Fuoctionality
    const [showPassword,
        setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    //login Part Start from here
    const {register, handleSubmit, reset, formState} = useForm({
        defaultValues: {
            identifer: '',
            password: ''
        },
        resolver: yupResolver(schema),
        mode: "all"
    })
    const {isValid} = formState;
    const { setUser } = UseAuthContext();
    const [isLoading, setIsLoading] = useState(false);  
    const onSubmit = async (values) => {
        if(isValid){
            setIsLoading(true);
            try {
              const value = {
                identifier: values.identifer,
                password: values.password,
              };
              const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
              });
        
              const data = await response.json();
              if (data?.error) {
                throw data?.error;
              } else {
                setToken(data.jwt);
                setUser(data.user);
                delete data.user.password
                toast(`Welcome back ${data.user.username}!`);
                reset();
                setTimeout(()=>{
                    router.push('/')
                },3000);
                }
            } catch (error) {
              toast(error?.message)
            } finally {
              setIsLoading(false);
            }
        }else{
            toast('Invaild Creadentials')
        }
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
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>

                            <FormGroup>
                                <Label>Email Address or UserName</Label>
                                <Input type="text" placeholder="ex:munira123" {...register('identifer')}></Input>
                                <ErrorText>{formState.errors.identifer
                                        ?.message}</ErrorText>
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
                                    : 'password'}
                                    {...register('password')}></Input>
                                <InputAdornment
                                    position="start"
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
                                <ErrorText>{formState.errors.password
                                        ?.message}</ErrorText>
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
                                    width: '100%',
                                    gap : 10,
                                }}
                                className="justifyAlignCenter"
                                
                                    type="Submit">Log In {isLoading && <CircularProgress size={12} color='secondary' ></CircularProgress>} </PrimaryBtn>

                            </FormGroup>
                        </form>

                        <Typography variant="body2">Do not have an account?
                            <Link href={'/'} legacyBehavior>
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