import BigLogo from "../../Assets/logo-todo-big.png"
import "./styles.css"

function BigLogoComponent(){

    return(
        <div className="container-logo">
            <img src={BigLogo} alt="" />
        </div>
    )
}

export default BigLogoComponent;