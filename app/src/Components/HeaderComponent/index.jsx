import { ContainerHeader, 
    ImgLogo, 
    MenuHeaderUserLogged, 
    MenuHeaderUserNotLogged 
} from "./styles";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import smalLogo from "../../Assets/logo-todo-small.png"
import logoutIcon from "../../Assets/log-out.png"
import MenuLateral from "../MenuComponent";

function HeaderComponent(){

    const [loggedUser, setLoggedUser] = useState(false)
    const navigate = useNavigate()

    const logoutFunction = () =>{
        window.localStorage.clear()
        navigate("/login")
    }

    useEffect(()=>{
        const token = window.localStorage.getItem("@token")
        if(token === null){
            setLoggedUser(false)
        }else{
            setLoggedUser(true)
        }
    }, [loggedUser])

    return(
        <>
        {
            loggedUser?
            <>
            <ContainerHeader>
                <ImgLogo src={smalLogo} />
                    <MenuHeaderUserLogged>
                        <ul>
                            <li onClick={()=>navigate("/")}>Home</li>
                            <li onClick={()=>navigate("/all-lists")} >Listas</li>
                        </ul>

                        <img src={logoutIcon} onClick={()=> logoutFunction()}/>
                    </MenuHeaderUserLogged>
            </ContainerHeader>
            <MenuLateral/>
            </>
            :
            <ContainerHeader>
                <ImgLogo src={smalLogo}  />
                <MenuHeaderUserNotLogged>
                    <li onClick={()=> navigate("/login")}>Login</li>
                    <li onClick={()=> navigate("/signup")} >Cadastrar</li>
                </MenuHeaderUserNotLogged>
            </ContainerHeader>
        }
        </>
    )
}

export default HeaderComponent;