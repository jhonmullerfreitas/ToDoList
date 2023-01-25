import { BoxFormSignup, ButtonSignup, FormSignupInputs } from "./styles";
import TextField from '@mui/material/TextField';

function FormSignup(){

    return(
        <BoxFormSignup>
            <h2>Cadastrar</h2>

            <FormSignupInputs>
                <TextField label='Email' size='small' />
                <TextField label='Senha' size='small' />
                <TextField label='Confirmar senha' size='small' />

                <ButtonSignup>
                    Cadastrar
                </ButtonSignup>
            </FormSignupInputs>

        </BoxFormSignup>
    )
}

export default FormSignup;