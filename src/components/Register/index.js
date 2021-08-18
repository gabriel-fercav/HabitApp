import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import { useContext } from 'react';
import { UserContext } from '../../Providers/UserProvider';

const RegisterForm = () => {

    const history = useHistory()
    const { createUser } = useContext(UserContext)

    const schema = yup.object().shape({
        username: yup.string().max(12, "Máx. de 12 caractéres.").required("Nome obrigatório"),
        email: yup.string().email("Deve ser um e-mail válido.").required("E-mail obrigatório."),
        password: yup.string().min(4, "Mínimo de 4 caractéres").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, "Necessário letras e números."),
        confirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), })

    const handleRegister = (data) => {
        const newUser = {username: data.username, email: data.email, password: data.password}
        // Necessário criar um objeto com apenas "username, email, password" e remover "confirm"
        // pois "confirm" não é aceito pela requisição.
        createUser(newUser)
        history.push(`/`)
    }

    return (
        <form onSubmit={handleSubmit(handleRegister)}>
            <Container>
                <h1 className="title">Cadastro</h1>
                <TextField {...register("username")} error={!!errors.username} fullWidth variant="outlined" label="Usuário" />
                <TextField {...register("email")} error={!!errors.email} fullWidth variant="outlined" label="E-mail" />
                <TextField {...register("password")} error={!!errors.password} fullWidth variant="outlined" label="Senha" />
                <TextField {...register("confirm")} error={!!errors.confirm} fullWidth variant="outlined" label="Confirmar Senha" />
                <div className="button__container">
                    <button type="submit" className="log__button">Cadastrar</button>
                    <span>Já está cadastrado? <Link to="/">Logar!</Link></span>
                </div>
            </Container>
        </form>
    )


}

export default RegisterForm