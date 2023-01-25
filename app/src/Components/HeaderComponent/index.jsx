import { ContainerHeader, 
    ImgLogo, 
    MenuHeaderUserLogged, 
    MenuHeaderUserNotLogged 
} from "./styles";

import { useState } from "react";

import smalLogo from "../../Assets/logo-todo-small.png"
import logoutIcon from "../../Assets/log-out.png"
import MenuLateral from "../MenuComponent";

function HeaderComponent(){

    const [loggedUser, setLoggedUser] = useState(false)

    return(
        <>
        {
            loggedUser?
            <>
            <ContainerHeader>
                <ImgLogo src={smalLogo} />
                    <MenuHeaderUserLogged>
                        <ul>
                            <li>Home</li>
                            <li>Listas</li>
                        </ul>

                        <img src={logoutIcon}/>
                    </MenuHeaderUserLogged>
            </ContainerHeader>
            <MenuLateral/>
            </>
            :
            <ContainerHeader>
                <ImgLogo src={smalLogo} />
                <MenuHeaderUserNotLogged>
                    <li>Login</li>
                    <li>Cadastrar</li>
                </MenuHeaderUserNotLogged>
            </ContainerHeader>
        }
        </>
    )
}

export default HeaderComponent;