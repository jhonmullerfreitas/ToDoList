import FormLogin from "../FormLogin";
import { BoxBigLogo, BoxContentLogin } from "./styles";
import BigLogoImg from "../../Assets/logo-todo-big.png"

function ContentLoginComponent(){

    return(
        <BoxContentLogin>
            <BoxBigLogo>
                <img src={BigLogoImg}/>
            </BoxBigLogo>
            <FormLogin/>
        </BoxContentLogin>
    )
}

export default ContentLoginComponent;