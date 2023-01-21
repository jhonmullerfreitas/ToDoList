import { Drawer, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import "./styles.css"
import OptionMenuComponent from "../OptionMenuComponent/index ";

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
                        color: '#FFFFFF', 
                        backgroundColor: 'blue.menuLateral'
                    }} 
                />
            </IconButton>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                
            >
                <div className="menuLateral">
                    <div className="menuLateral-options">
                        <OptionMenuComponent option={"Perfil"} />
                        <OptionMenuComponent option={"Criar Lista"} />
                        <OptionMenuComponent option={"Todas as Listas"} />
                    </div>

                    <div className="menuLateral-logout">
                        <OptionMenuComponent option={"Sair"} />
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default MenuLateral;