import { OptionMenuLateral } from "./styles";

function OptionMenuComponent(props){

    return(
        <OptionMenuLateral>
            {props.option}
        </OptionMenuLateral>
    )
}

export default OptionMenuComponent;