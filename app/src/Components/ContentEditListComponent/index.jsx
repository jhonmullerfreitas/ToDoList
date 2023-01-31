import { AddItemInput, BoxInput, BoxItens, BoxList, ButtonAddItem, HeaderList} from "./styles";
import AddIcon from '@mui/icons-material/Add';
import ItemList from "../ItemList";
import api from '../../Services/api';
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import ModalEditList from "../ModalEditList";

function ContentEditListComponent(){

    const idList = window.localStorage.getItem("@idListDetail")

    const schema = yup.object().shape({
        name: yup.string().required("Nome do item obrigatório.")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const [list, setList] = useState([])
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("@token")

    useEffect(()=>{
        api.get(`/list/${idList}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res)=>{
            setList(res.data)
            setItems(res.data.items)
        })
        .catch((error)=>{
            console.log("erro",error)
        })
    }, [list])

    const addItemFunction = (data) =>{
        api.post(
            `/item/${idList}`,
            data
            ,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((res)=>{
        //    console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <BoxList>
            <h3>Lista</h3>
            <HeaderList>
                <p>{list.name}</p>
                <ModalEditList/>
            </HeaderList>

            <BoxInput onSubmit={handleSubmit(addItemFunction)} >
                <AddItemInput placeholder="Adicionar item" {...register("name")} />
                <ButtonAddItem type="submit" ><AddIcon fontSize='large'/></ButtonAddItem>
            </BoxInput>

            <BoxItens>
                {
                    ItemList ? 
                    items.map((item)=><ItemList nameItem={item.nameItem} key={item.idItem} idItem={item.idItem} />)
                    : <></>
                }
            
            </BoxItens>

        </BoxList>
    )
}

export default ContentEditListComponent;