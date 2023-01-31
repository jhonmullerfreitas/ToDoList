import { BoxItem, NameItem } from "./styles";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import ModalEditItem from "../ModalEditItem"
import axios from "axios"

function ItemList(props){

    const [done, setDone] = useState(false)
    const idList = window.localStorage.getItem("@idListDetail")
    const token = window.localStorage.getItem("@token")

    const deleteItem = (id) =>{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { 
                idItem: id,
            } 
        }
        axios.delete(`http://localhost:3001/item/${idList}`, config)
        .then((res)=> console.log(res))
        .catch((error)=>console.log(error))
    }

    return(
        <BoxItem>
            <Checkbox 
                checked={done}
                color="success" 
                onChange={function(e){
                    setDone(e.target.checked)
                }}
            />

            <NameItem done={done} >{props.nameItem}</NameItem>

            <ModalEditItem idItem={props.idItem} />
            <DeleteIcon fontSize='small' onClick={()=> deleteItem(props.idItem)}  sx={{ '&:hover':{cursor: 'pointer'} }} />

        </BoxItem>
    )
}

export default ItemList;