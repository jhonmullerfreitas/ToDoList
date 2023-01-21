import "./styles.css"
import TextField from '@mui/material/TextField';

function FormLogin(){

    return(
        <div className="content-login-form">
            <h3>Login</h3>

            <form className="login-form">
                {/* <div>
                    <p>Email</p>
                    <input placeholder="Digite seu email" />
                </div> */}
                <TextField
                    
                />

                <div>
                    <p>Senha</p>
                    <input type="text" placeholder="Digite sua senha" />
                </div>

                <p>Criar conta</p>

                <button>Entrar</button>
            </form>
        </div>
    )
}

export default FormLogin;