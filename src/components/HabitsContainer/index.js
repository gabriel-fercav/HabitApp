import { useContext } from "react"
import { IconButton } from "@material-ui/core"
import { Container, Title } from "./styles"
import { IoAddCircle } from 'react-icons/io5'
import Habits from './../Habits'
const HabitsContainer = ()  => {
   
    return (
        <Container>
            <span>
                <Title> Meus habitos </Title>
            <IconButton>
                <IoAddCircle size = {"1.40em"} color = {"#0BAC1B" }/>
            </IconButton>
            </span>
            {/* provider.map((a) => < Habits key = {a.id} habits = {a} /> ) */}
        </Container>
    )
}

export default HabitsContainer