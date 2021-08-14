import { Container } from "./styles";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";

const LoginForm = () => {

  const history = useHistory()
  const { signIn } = useContext(UserContext)

  const schema = yup.object().shape({
    username: yup.string().max(12, "Máx. de 12 caractéres.").required("Nome obrigatório."),
    password: yup.string().min(4, "Mínimo de 4 caractéres").required("Password Obrigatório."),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), })

  const handleLogin = (data) => {
    signIn(data)
    // adicionar history.push("") para página de usuário.
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Container>
        <h1 className="title">Login</h1>
        <TextField {...register("username")} error={!!errors.username} fullWidth variant="outlined" label="Usuário" />
        <TextField {...register("password")} error={!!errors.password} fullWidth variant="outlined" label="Senha" />
        <div className="button__container">
          <button className="log__button">Entrar</button>
          <span>
            Não tem cadastro? <Link to="/register">Inscreva-se!</Link>
          </span>
        </div>
      </Container>
    </form>
  );
};

export default LoginForm;
