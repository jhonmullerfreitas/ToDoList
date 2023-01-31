import { BoxCard, ButtonDelete, ButtonDetail, OptionsCard, TitleList } from "./styles";
import api from '../../Services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"

function CardList(props){

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    const deleteList = (idList) => {
        api.delete(`/list/${idList}`, {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then((res)=> {
            toast("Lista excluída.")
        })
        .catch((error)=>console.log(error))
    }

    const detailList = (idList) => {
        window.localStorage.setItem("@idListDetail", idList)
        navigate("/edit-list")
    }

    return(
        <BoxCard>
            <ToastContainer/>
            <TitleList>{props.nameList}</TitleList>
            <OptionsCard>
                <ButtonDetail onClick={()=> detailList(props.id)} >Detalhes</ButtonDetail>
                <ButtonDelete onClick={()=> deleteList(props.id)} >Deletar</ButtonDelete>
            </OptionsCard>
        </BoxCard>
    )
}

export default CardList;