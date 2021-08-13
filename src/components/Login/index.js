import { Container } from './styles'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'


const LoginForm = () => {

    return (
        <Container>
            <h1 className="title">Login</h1>
            <TextField fullWidth variant="outlined" label="E-mail" />
            <TextField fullWidth variant="outlined" label="Senha" />
            <div className="button__container">
                <button className="log__button">Entrar</button>
                <span>Não tem cadastro? <Link>Inscreva-se!</Link></span>
            </div>

        </Container>
    )


}

export default LoginForm