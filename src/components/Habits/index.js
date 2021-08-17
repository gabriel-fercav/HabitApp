import {
  Card,
  ContainerText,
  ContainerButton,
  Title,
  Content,
  Button,
} from "./styles";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdTitle, MdGames } from "react-icons/md";
import { useContext } from "react";
import { HabitsContext } from "../../Providers/HabitsProvider";
import { TiBatteryFull } from "react-icons/ti";
import { GiLightningFrequency } from "react-icons/gi";

const Habits = ({ habit }) => {
  const { removeHabit } = useContext(HabitsContext);

  const handleTrash = (id) => {
    removeHabit(id);
  };

  const handleUpdate = () => {};

  return (
    <Card>
      <ContainerButton>
        <span>
          <Button onClick={() => handleTrash(habit.id)}>
            <FaCheck color={"#FF6109"} size={20} />
          </Button>
        </span>
        <span>
          <Button onClick={() => handleUpdate}>
            <FaEdit color="#FF6109" size={20} />
          </Button>
        </span>
      </ContainerButton>
      <ContainerText>
        <Content>
          <MdTitle color="#FF6109" size={20} />
          <Title> {habit.title} </Title>
        </Content>
        <Content>
          <MdGames color="#FF6109" size={20} />
          <span>
            <span>Categoria: </span>
            {habit.category}
          </span>
        </Content>
        <Content>
          <TiBatteryFull color="#FF6109" size={20} />
          <span>
            <span>Dificuldade: </span>
            {habit.difficulty}
          </span>
        </Content>
        <Content>
          <GiLightningFrequency color="#FF6109" size={20} />
          <span>
            <span>Frequencia: </span>
            {habit.frequency}
          </span>
        </Content>
      </ContainerText>
    </Card>
  );
};

export default Habits;
