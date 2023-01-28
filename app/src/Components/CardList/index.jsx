import { BoxCard, ButtonDelete, ButtonDetail, OptionsCard, TitleList } from "./styles";

function CardList(props){
    return(
        <BoxCard>
            <TitleList>{props.nameList}</TitleList>
            <OptionsCard>
                <ButtonDetail>Detalhes</ButtonDetail>
                <ButtonDelete>Deletar</ButtonDelete>
            </OptionsCard>
        </BoxCard>
    )
}

export default CardList;