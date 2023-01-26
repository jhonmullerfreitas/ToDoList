import { AddItemInput, BoxInput, BoxItens, BoxList, HeaderList} from "./styles";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ItemList from "../ItemList";

function ContentNewListComponent(){

    return(
        <BoxList>
            <h3>Lista</h3>
            <HeaderList>
                <p>Minha Lista</p>
                <EditIcon fontSize='small' />
            </HeaderList>

            <BoxInput>
                <AddItemInput placeholder="Adicionar item" />
                <AddIcon fontSize='large'/>
            </BoxInput>

            <BoxItens>
                
                <ItemList nameItem={"Varrer a casa"} />
                <ItemList nameItem={"Passar pano"} />
                
 
            </BoxItens>

        </BoxList>
    )
}

export default ContentNewListComponent;