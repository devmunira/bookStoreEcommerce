import {
    Box,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Typography
} from "@mui/material";
import { ErrorText, FormGroup, Input } from "../components/shared/styled/Form";
import { Label } from "../components/shared/styled/Form";
import { PlaneBtn, PrimaryBtn } from "@/src/components/shared/styled/component";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Head from "next/head";
import SEO from "@/src/components/layout/SEO";
import axios from "axios";
import useRegister from "@/src/hooks/useRegister";

const RegisterPage = () => {
   const {msg,register,handleSubmit,formState,isSubmitting, submitCount , isSubmitSuccessful, showPassword,handleClickShowPassword,handleMouseDownPassword,onSubmit,theme} = useRegister();
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
                        }}>Welcome to BoiGhor {submitCount} </Typography>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <FormGroup>
                                <Label>Email Address</Label>
                                <Input type="text" placeholder="ex:munira@example.com" {...register('email' , {
                                    required :'Email is required!',
                                    pattern : {
                                        value : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message : 'Invalid Email Address'
                                    },
                                    validate : async (email) => {
                                        const data = await axios.get(`http://localhost:1337/api/users/?filters[email][$eq]=${email}`);
                                        return data.data.length == 0 || 'Already Exits try another email address'
                                    }
                                    
                                })}></Input>
                                <ErrorText>{formState.errors.email
                                        ?.message}</ErrorText>
                            </FormGroup>

                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" placeholder="ex:munira12" 
                                {...register('username' , {
                                    required : 'Username is Required',
                                    min : {
                                        value : 3,
                                        message : 'Min 3 characters'
                                    },
                                    max : 10,
                                    validate : async (username) => {
                                        const data = await axios.get(`http://localhost:1337/api/users/?filters[username][$eq]=${username}`);
                                        return data.data.length == 0 || 'Already Exits try another username '
                                    }
                                })}></Input>
                                <ErrorText>{formState.errors.username
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
                                    {...register('password' , {
                                        required : 'Password is Required',
                                        pattern : {
                                            value : /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                            message : 'min 8 letter password, with at least a symbol, upper and lower case'
                                        },
                                    })}></Input>
                                <ErrorText>{formState.errors.password
                                        ?.message}</ErrorText>

                                <InputAdornment
                                    style={{
                                    position: 'absolute',
                                    left: '88%',
                                    top: '45px'
                                }}
                                    position="start">
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

                            <FormGroup className="">
                                <FormControlLabel
                                    style={{
                                    color: theme.palette.text.secondary,
                                    margin : 0,
                                    padding : 0,
                                }}
                                    control={<Checkbox style={{ color : theme.palette.primary.main }}defaultChecked {
                                    ...register('agreement' , {
                                        required : 'Agreement must be check',
                                    })
                                } />}/>
                                

                                <Label
                                    style={{
                                    marginRight: '0px'
                                }}>Agree with
                                    <PlaneBtn
                                        style={{
                                        fontSize: '12px'
                                    }}> Our Terms and Conditions</PlaneBtn>
                                </Label>

                                <br></br>
                                <ErrorText>{formState.errors.agreement
                                        ?.message}</ErrorText>
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
                                
                                    type="Submit">Create Account {isSubmitting && <CircularProgress size={12} color='secondary' ></CircularProgress>} </PrimaryBtn>

                                    {
                                        isSubmitSuccessful && <Box sx={{ pt:2 , color : 'green' , fontWeight : 'bold' }}>{msg}</Box>
                                    }
                            </FormGroup>
                        </form>
                        <Typography variant="body2">Already have an account?
                            <Link href={'/register'} legacyBehavior>
                                <PlaneBtn>Sign In</PlaneBtn>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )

}

export default RegisterPage;