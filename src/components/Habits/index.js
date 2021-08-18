import { useState } from "react";
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
import { FiPercent } from "react-icons/fi";
const Habits = ({ habit, setShowModalUpdate, showModalUpdate }) => {
  const [achieved, setAchieved] = useState(false);

  const { removeHabit } = useContext(HabitsContext);

  const handleTrash = (id) => {
    removeHabit(id);
  };

  const handleUpdate = () => {
    setShowModalUpdate(!showModalUpdate);
  };

  return (
    <Card>
      <ContainerButton>
        <span>
          <Button onClick={() => handleTrash(habit.id)}>
            <FaCheck color={"#FF6109"} size={20} />
          </Button>
        </span>
        <span>
          <Button onClick={() => handleUpdate()}>
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
        <Content>
          <span>
            <FiPercent color="#FF6109" size={20} />
            <span>Valor alcançado:</span> {habit.how_much_achieved}{" "}
          </span>
        </Content>
      </ContainerText>
    </Card>
  );
};

export default Habits;
