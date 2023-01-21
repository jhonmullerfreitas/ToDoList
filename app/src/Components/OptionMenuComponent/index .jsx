import "./styles.css"

function OptionMenuComponent(props){

    return(
        <button className="button-option-menu">
            {props.option}
        </button>
    )
}

export default OptionMenuComponent;