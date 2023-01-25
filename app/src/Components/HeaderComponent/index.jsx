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

    const [loggedUser, setLoggedUser] = useState(true)

    return(
        <>
            <ContainerHeader>
                <ImgLogo src={smalLogo} />

                {
                    loggedUser?
                    <MenuHeaderUserLogged>
                        <ul>
                            <li>Home</li>
                            <li>Listas</li>
                        </ul>

                        <img src={logoutIcon}/>
                    </MenuHeaderUserLogged>
                    :
                    <MenuHeaderUserNotLogged>
                        <li>Login</li>
                        <li>Cadastrar</li>
                    </MenuHeaderUserNotLogged>
                }
            </ContainerHeader>
            <MenuLateral/>
        </>
    )
}

export default HeaderComponent;