import { Main } from './styles'
import LoginImg from '../../assets/LoginMobile.svg'
import LoginImgDesk from '../../assets/loginDesktop.svg'
import LoginForm from '../../components/Login'

const Login = () => {

    return (
        <Main>
            <div className="text__container">
                <h1>Gamer Habits</h1>
                {/* <img src={LoginImgDesk} alt="teste"/> */}
                <h2>Entre na comunidade e adicione seus hábitos, metas e atividades!</h2>
            </div>
            <div className="login__container">
                {/* <img src={LoginImg} alt="Teste" /> */}
                <LoginForm />
            </div>
        </Main>
    )

}

export default Login