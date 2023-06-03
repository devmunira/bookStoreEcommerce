import { useState } from "react";
import React from "react";
import {useForm} from "react-hook-form";
import { toast } from "react-toastify";
import { setToken } from "@/src/services/helper";
import { UseAuthContext } from "@/src/context/AuthContext";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import bcrypt from "bcryptjs"

const useRegister = () => {
    const [msg,setMsg] = useState();
    const router = useRouter();
    const [loading,setLoading] = useState(false);
    
    const {register, control, handleSubmit, formState , reset} = useForm({
        defaultValues : {
            email : "",
            username : "",
            password : "",
        },
        mode : "all"
    });

    const theme = useTheme();

    const {setUser} =  UseAuthContext();

    const {errors,isValid,isSubmitting, submitCount , isSubmitSuccessful ,isLoading} = formState;

    const [showPassword,
        setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = async (values) => {
        if(isValid){
            setLoading(true);
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(values.password , salt)

            try {
              let data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local/register` , {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username : values.username,
                    email : values.email,
                    password : hash,
                }),
              });
        
                data = await data.json();
                if(data?.error){
                   toast(data.error.message)
                }else{
                    // Set JWT token to LoalStrorage
                    setToken(data.jwt)
                    // Set User to User Context
                    setUser(data.user)
                    // Reset Functionality
                    setMsg('Your Registration Complete Successfully!')
                    reset();

                    setTimeout(()=>{
                        setMsg('')
                        router.push('/')
                    },3000);
                }   
            } catch (error) {
                toast(error.message , {id : "error"})
            }
        }else{
            alert('There are errors!')
        }
    }
    return {
        msg,loading,register,handleSubmit,control, formState , reset , errors,isValid,isSubmitting, submitCount , isSubmitSuccessful ,isLoading , setUser , showPassword,handleClickShowPassword,handleMouseDownPassword,onSubmit,theme

    }
}

export default useRegister;