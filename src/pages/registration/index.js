import { Main } from './styles'
import RegisImg from '../../assets/register.svg'
import RegisterForm from '../../components/Register'

const Registration = () => {

    return (
        <Main>
            <div className="login__container">
                <RegisterForm />
            </div>
            <div className="text__container">
                <img src={RegisImg} alt="teste" />
            </div>
        </Main>
    )

}

export default Registration