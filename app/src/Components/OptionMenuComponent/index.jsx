import { OptionMenuLateral } from "./styles";
import { useNavigate } from "react-router-dom"

function OptionMenuComponent(props){

    const navigate = useNavigate()

    const redirect = (page) =>{
        if(page === "/login"){
            window.localStorage.clear();
            navigate(page)
        }

        navigate(page)
    }

    return(
        <OptionMenuLateral onClick={()=> redirect(props.page)} >
            {props.option}
        </OptionMenuLateral>
    )
}

export default OptionMenuComponent;