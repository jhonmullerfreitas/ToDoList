import { BoxItem, NameItem } from "./styles";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";

function ItemList(props){

    const [done, setDone] = useState(false)

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

            <EditIcon fontSize='small' />
            <DeleteIcon fontSize='small' />

        </BoxItem>
    )
}

export default ItemList;