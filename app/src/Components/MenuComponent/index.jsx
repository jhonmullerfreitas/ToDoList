import { useState } from "react"
import { Drawer, IconButton } from "@mui/material"
import { BoxMenuLateral, OptionsMenuLateral } from "./styles";
import MenuIcon from "@mui/icons-material/Menu"
import OptionMenuComponent from "../OptionMenuComponent";

function MenuLateral(){

    const [drawerOpen, setDrawerOpen] = useState(false);

    return(
        <>
            <IconButton 
                size="large" 
                edge="start" 
                color='inherit' 
                aria-label='logo' 
                onClick={() => setDrawerOpen(true)} 
                sx={{
                    padding: 0,
                    margin: 0,
                }}
            >
                <MenuIcon 
                    sx={{
                        height: '7vh',
                        width:{
                            xs: '10vw',
                            sm: '8vw',
                            md: '7vw',
                            lg: '4vw',
                        },
                        borderBottomRightRadius: '5px',
                        padding: 0,
                        color: 'var(--white)', 
                        backgroundColor: 'var(--blue)'
                    }} 
                />
            </IconButton>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <BoxMenuLateral>
                    <OptionsMenuLateral>
                        <OptionMenuComponent option={"Perfil"} />
                        <OptionMenuComponent option={"Criar Lista"} />
                        <OptionMenuComponent option={"Todas as Listas"} />
                    </OptionsMenuLateral>

                    <OptionMenuComponent option={"Sair"} />
                </BoxMenuLateral>
            </Drawer>
        </>
    )
}

export default MenuLateral;