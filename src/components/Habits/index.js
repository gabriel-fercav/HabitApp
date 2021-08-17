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
const Habits = ({ habits }) => {
  const { removeHabit } = useContext(HabitsContext);

  const handleTrash = (id) => {
    removeHabit(id);
  };

  return (
    <Container>
      <Card>
        <ContainerButton>
          <Trash>
            <Button onClick={handleTrash(habits.id)}>
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
        <Title> {habits.title} </Title>
        <h2> Categoria: {habits.category} </h2>
        <h2> Dificuldade: {habits.difficulty}</h2>
        <h3> Frequencia: {habits.frequency} </h3>
        {habits.achieved ? null : (
          <Check>
            <IconButton
              style={{ backgroundColor: "#FF6109" }}
              variant="outlined"
              onClick
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
