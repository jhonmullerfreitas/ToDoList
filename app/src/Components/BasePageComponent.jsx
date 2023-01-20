import { Stack } from "@mui/material"
import HeaderComponent from "./HeaderComponent";

function BasePageComponent(){

    return(
        <Stack
            sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                // border: '1px solid green',
            }}
        >
            <HeaderComponent/>
        </Stack>
    )
}

export default BasePageComponent;