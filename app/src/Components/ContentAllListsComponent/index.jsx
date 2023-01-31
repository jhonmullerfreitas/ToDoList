import CardList from "../CardList";
import { BoxContentLists, NewListButton, TitlePage, VoidList } from "./styles";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api from '../../Services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContentAllListsComponent(){

    const [list, SetList] = useState([])
    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    useEffect(()=>{
        api.get("/list", {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then((res)=> {
            SetList(res.data)
        })
        .catch((error)=>{
            toast("Realize novamente seu login. Redirecionando...")
            setTimeout(() => {
                navigate('/login')
            }, "2000")
        })
    }, [list])

    return(
        <>
            <TitlePage>Listas</TitlePage>
            <ToastContainer/>
            {
                Object.keys(list).length > 0 ?
                <BoxContentLists>
                    {list.map((item)=> <CardList nameList={item.name} key={item.id} id={item.id} />)}
                </BoxContentLists>
                :
                <VoidList>
                    <h5>Nenhuma lista criada :(</h5>
                    <NewListButton onClick={()=> navigate("/new-list")} >Criar lista.</NewListButton>
                </VoidList>
            }
        </>
    )
}

export default ContentAllListsComponent;