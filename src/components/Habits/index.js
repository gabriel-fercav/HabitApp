import {
  Card,
  Container,
  ContainerButton,
  Title,
  Check,
  Trash,
  Button,
  SpanEdit,
} from "./styles";
import { IconButton } from "@material-ui/core";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { HabitsContext } from "../../Providers/HabitsProvider";
const Habits = ({ habit }) => {
  const { removeHabit } = useContext(HabitsContext);

  const handleTrash = (id) => {
    removeHabit(id);
  };

  return (
    <Container>
      <Card>
        <ContainerButton>
          <Trash>
            <Button onClick={() => handleTrash(habit.id)}>
              {" "}
              <FaTrash color={"hsl(356, 100%, 41%)"} size={20} />{" "}
            </Button>
          </Trash>
          <SpanEdit>
            <Button>
              <FaEdit color="#ff0" size={20} />
            </Button>
          </SpanEdit>
        </ContainerButton>
        <Title> {habit.title} </Title>
        <h2> Categoria: {habit.category} </h2>
        <h2> Dificuldade: {habit.difficulty}</h2>
        <h3> Frequencia: {habit.frequency} </h3>
        {habit.achieved ? null : (
          <Check>
            <IconButton
              style={{ backgroundColor: "#FF6109" }}
              variant="outlined"
            >
              {" "}
              <FaCheck size="0.7em" />{" "}
            </IconButton>
          </Check>
        )}
      </Card>
    </Container>
  );
};

export default Habits;
