import { Container } from './styles'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'


const RegisterForm = () => {

    return (
        <Container>
            <h1 className="title">Cadastro</h1>
            <TextField fullWidth variant="outlined" label="Usuário" />
            <TextField fullWidth variant="outlined" label="E-mail" />
            <TextField fullWidth variant="outlined" label="Senha" />
            <TextField fullWidth variant="outlined" label="Confirmar Senha" />
            <div className="button__container">
                <button className="log__button">Cadastrar</button>
                <span>Já está cadastrado? <Link to="/">Logar!</Link></span>
            </div>

        </Container>
    )


}

export default RegisterForm