import TextField from '@mui/material/TextField';
import { BoxFormLogin, ButtonLogin, FormLoginInputs, SpanError } from './styles';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormLogin(){
    const schema = yup.object().shape({
        email: yup.string().email().required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })

    const [userLogged, setUserLogged] = useState(false)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        axios.post(
            "http://localhost:3001/user/login",
            data
        ).then((res)=>{
            toast("Login realizado com sucesso.")
            window.localStorage.setItem("@token", res.data.token)
            window.localStorage.setItem("@id", res.data.id)
            setTimeout(() => {
                setUserLogged(true)
            }, "2000")
        })
        .catch((error)=>{
            toast(`${error.response.data.message}`)
        })
    }

    useEffect(()=> {
        const token = window.localStorage.getItem("@token")
        if(token){
            setUserLogged(true)
            navigate("/")
        }
    }, [userLogged])

    return(
        <BoxFormLogin>
            <ToastContainer/>
            <h2>Login</h2>

            <FormLoginInputs onSubmit={handleSubmit(onSubmit)} >
                <TextField label='Email' size='small' {...register("email")} />
                <SpanError>{errors.email?.message}</SpanError>
                <TextField type='password' label='Senha' size='small' {...register("password")} />
                <SpanError>{errors.password?.message}</SpanError>
                <ButtonLogin type='submit'>
                    Entrar
                </ButtonLogin>
            </FormLoginInputs>

        </BoxFormLogin>
    )
}

export default FormLogin;