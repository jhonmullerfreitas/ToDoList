import CardList from "../CardList";
import { BoxAllLists, BoxContentLists, BoxImg, BoxImgAllLists, BoxMessage, NewListButton, VoidList } from "./styles";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api from '../../Services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VoidListImg from "../../Assets/void-list.png"
import List from "../../Assets/list.png"

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
            <ToastContainer/>
            {
                Object.keys(list).length > 0 ?
                <BoxAllLists>
                    <BoxImgAllLists>
                        <img src={List} />
                    </BoxImgAllLists>
                    <BoxContentLists>
                        {list.map((item)=> <CardList nameList={item.name} key={item.id} id={item.id} />)}
                    </BoxContentLists>
                </BoxAllLists>
                :
                <VoidList>
                    <BoxImg>
                        <img src={VoidListImg} />
                    </BoxImg>
                    <BoxMessage>
                        <h5>Nenhuma lista criada :(</h5>
                        <NewListButton onClick={()=> navigate("/new-list")} >Criar lista.</NewListButton>
                    </BoxMessage>
                </VoidList>
            }
        </>
    )
}

export default ContentAllListsComponent;