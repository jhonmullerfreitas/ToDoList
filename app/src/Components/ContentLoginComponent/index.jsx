import "./styles.css"
import BigLogoComponent from "../BigLogoComponent/index"
import FormLogin from "../FormLogin";

function ContentLoginComponent(){

    return(
        <div className="content-login">
            <BigLogoComponent/>
            <FormLogin/>
        </div>
    )
}

export default ContentLoginComponent;