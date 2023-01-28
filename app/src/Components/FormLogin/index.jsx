import TextField from '@mui/material/TextField';
import { BoxFormLogin, ButtonLogin, FormLoginInputs } from './styles';

function FormLogin(){

    return(
        <BoxFormLogin>
            <h2>Login</h2>

            <FormLoginInputs>
                <TextField label='Email' size='small' />
                <TextField label='Senha' size='small' />
                
                <ButtonLogin>
                    Entrar
                </ButtonLogin>
            </FormLoginInputs>

        </BoxFormLogin>
    )
}

export default FormLogin;