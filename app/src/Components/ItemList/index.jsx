import { BoxItem, NameItem } from "./styles";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import ModalEditItem from "../ModalEditItem"
import api from '../../Services/api';

function ItemList(props){

    const [done, setDone] = useState(false)
    const idList = window.localStorage.getItem("@idListDetail")
    const token = window.localStorage.getItem("@token")

    useEffect(()=>{
        const data = {idItem: props.idItem}
        api.put(`/item/${idList}`,
            data,
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            } 
        )
        .then((res)=> {
            setDone(res.data.done)
        })
        .catch((error)=> console.log(error))
    },[])

    const doneFunction = () =>{
        const data = {idItem: props.idItem}
        api.put(`/item/${idList}`,
            data,
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            } 
        )
        .then((res)=> {
            setDone(res.data.done)
        })
        .catch((error)=> console.log(error))
    }

    const deleteItem = (id) =>{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { 
                idItem: id,
            } 
        }
        api.delete(`/item/${idList}`, config)
        .then((res)=> console.log(res))
        .catch((error)=>console.log(error))
    }

    return(
        <BoxItem>
            <Checkbox 
                checked={done}
                color="success" 
                onClick={()=>doneFunction()}
            />

            <NameItem done={done} >{props.nameItem}</NameItem>

            <ModalEditItem idItem={props.idItem} />
            <DeleteIcon fontSize='small' onClick={()=> deleteItem(props.idItem)}  sx={{ '&:hover':{cursor: 'pointer'} }} />

        </BoxItem>
    )
}

export default ItemList;