import { BoxFormSignup, ButtonSignup, FormSignupInputs, SpanError } from "./styles";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import api from '../../Services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormSignup(){
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
        api.post(
            "/user",
            data
        ).then((res)=> {
            toast("Cadastro realizado. Redirecionando...")
            setTimeout(() => {
                setUserLogged(true)
                navigate("/")
            }, "2000")
        })
        .catch((error)=> toast(`${error.response.data.message}`))
    }

    useEffect(()=> {
        const token = window.localStorage.getItem("@token")
        if(token){
            setUserLogged(true)
            navigate("/")
        }
    }, [userLogged])

    return(
        <BoxFormSignup>
            <ToastContainer/>
            <h2>Cadastrar</h2>

            <FormSignupInputs onSubmit={handleSubmit(onSubmit)} >
                <TextField label='Email' size='small' {...register("email")} />
                <SpanError>{errors.email?.message}</SpanError>
                <TextField type='password' label='Senha' size='small' {...register("password")} />
                <SpanError>{errors.password?.message}</SpanError>
                
                <ButtonSignup>
                    Cadastrar
                </ButtonSignup>
            </FormSignupInputs>

        </BoxFormSignup>
    )
}

export default FormSignup;