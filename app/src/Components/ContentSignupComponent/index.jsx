import BigLogoImg from "../../Assets/logo-todo-big.png"
import FormSignup from "../FormSignup";
import { BoxBigLogo, BoxContentSignup } from "./styles";

function ContentSignupComponent(){


    return(
        <BoxContentSignup>
            <BoxBigLogo>
                <img src={BigLogoImg}/>
            </BoxBigLogo>
            <FormSignup/>
        </BoxContentSignup>
    )
}

export default ContentSignupComponent;