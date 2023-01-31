import axios from "axios"

import { useEffect, useState } from "react";
import { BoxProfile, ButtonEditEmail, FormEditEmail } from "./styles";
import TextField from '@mui/material/TextField';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';

function ContentProfileComponent(){

    const schema = yup.object().shape({
        email: yup.string().email().required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const [user, setUser] = useState([])
    const idUser = window.localStorage.getItem("@id")
    const token = window.localStorage.getItem("@token")

    const editEmail = (data) => {

        axios.patch(
            `http://localhost:3001/user/${idUser}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((res)=>{
           console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${idUser}`, 
            {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            }
        )
        .then((res)=> setUser(res.data))
        .catch((error)=> console.log(error))
    }, [user])

    return(
        <>
            <BoxProfile>
                <p>Olá, {user.email}</p>
                <FormEditEmail onSubmit={handleSubmit(editEmail)} >
                    <TextField label="informe o novo email" size="small" {...register("email")} />
                    <TextField type='password' label="informe a nova senha" size="small" {...register("password")} />
                    <ButtonEditEmail type='submit' >Editar</ButtonEditEmail>
                </FormEditEmail>
            </BoxProfile>
        </>
    )
}

export default ContentProfileComponent;