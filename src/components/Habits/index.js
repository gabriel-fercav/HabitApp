import {Card, Title , checkStyles, trashStyles} from './styles'
import { IconButton } from '@material-ui/core'
import { FaTrash , FaCheck} from 'react-icons/fa'
const Habits = ({habits}) => {
    return (
        <Card>
            <span style = {trashStyles}><IconButton variant = "outlined" onClick > <FaTrash color = {"hsl(356, 100%, 41%)"} /> </IconButton></span>
            <Title> { habits.title} </Title>
            <h2> Categoria: { habits.category } </h2>
            <h2> Dificuldade: { habits.difficulty }</h2>
            <h3> Frequencia: { habits.frequency} </h3>
            { habits.achieved? 
             null : <span style = {checkStyles}><IconButton style = {{backgroundColor: "#FF6109"}}  variant = "outlined" onClick > <FaCheck size = "0.7em" /> </IconButton></span>
            }
        </Card>
    )
}

export default Habits