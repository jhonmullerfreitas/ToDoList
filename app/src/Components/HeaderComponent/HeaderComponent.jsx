import "./style.css"

import logoTodoSmall from "./../../Assets/logo-todo-small.png"
import logOut from "./../../Assets/log-out.png"

import { useState } from "react";

function HeaderComponent(){

    const [loggedInUser, setLoggedInUser] = useState(false)

    return(
        <div className="header">
            <div className="logo-small detailHover">
                <img src={logoTodoSmall} alt="" />
            </div>

            {
                loggedInUser ?
                <div className="menuHeader">
                    <ul className="menuHeaderOptions">
                        <li className=" detailHover">Home</li>
                        <li className=" detailHover">Listas</li>
                    </ul>

                    <div>
                        <img className="logOutImg detailHover" src={logOut} alt="" />
                    </div>
                </div>
                :
                <ul className="login-signup ">
                    <li className="detailHover">Login</li>
                    <li className="detailHover">Cadastrar</li>
                </ul>
            }
        </div>
    )
}

export default HeaderComponent;