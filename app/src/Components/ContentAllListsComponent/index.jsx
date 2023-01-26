import CardList from "../CardList";
import { BoxContentLists, NewListButton, TitlePage, VoidList } from "./styles";
import { useState } from "react";

function ContentAllListsComponent(){

    const [list, SetList] = useState(false)

    return(
        <>
            <TitlePage>Listas</TitlePage>
            {
                list ?
                <BoxContentLists>
                    <CardList nameList={"Limpeza Casa"} />
                    <CardList nameList={"Limpeza Casa"} />
                    <CardList nameList={"Limpeza Casa"} />
                    <CardList nameList={"Limpeza Casa"} />
                </BoxContentLists>
                :
                <VoidList>
                    <h5>Nenhuma lista criada :(</h5>
                    <NewListButton>Criar lista.</NewListButton>
                </VoidList>
            }
        </>
    )
}

export default ContentAllListsComponent;