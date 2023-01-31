import { BoxContent, BoxLogo, ButtonCreateList, Content } from "./styles";
import BigLogo from "../../Assets/logo-todo-big.png"
import {useNavigate} from "react-router-dom"

function Dashboard(){

    const navigate = useNavigate()

    return(
        <>
            <Content>
                <BoxLogo>
                    <img src={BigLogo}/>
                </BoxLogo>

                <BoxContent>
                    <p>Seja Bem Vindo!</p>
                    <ButtonCreateList onClick={()=> navigate("/new-list")} >Criar Lista</ButtonCreateList>
                </BoxContent>
            </Content>
        </>
    )
}

export default Dashboard;