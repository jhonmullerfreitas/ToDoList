import { BoxCreateList, BoxImg, ButtonCreateList, ContainerCreateList, FormCreateList, InputNameList } from "./styles";
import TextField from '@mui/material/TextField';
import CreateList from "../../Assets/create-list.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import api from '../../Services/api';
import {useNavigate} from "react-router-dom"

function FormNewList(){
    const schema = yup.object().shape({
        name: yup.string().required("Nome da lista obrigatório")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    const createList = (data) => {
        api.post(
            "/list",
            data,
            {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then((res)=>{
            window.localStorage.setItem("@idListDetail", res.data.id)
            navigate("/edit-list")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>
           <ContainerCreateList>
                <BoxImg>
                    <img src={CreateList}/>
                </BoxImg>

                <BoxCreateList>
                    <h3>Criar Lista</h3>
                    <FormCreateList onSubmit={handleSubmit(createList)} >
                        <TextField size="small" label="Informe o nome da lista" {...register("name")} />
                        <ButtonCreateList type="submit" >Criar Lista</ButtonCreateList>
                    </FormCreateList>
                </BoxCreateList>
           </ContainerCreateList>
        </>
    )
}

export default FormNewList;