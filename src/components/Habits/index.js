import { useState } from "react";
import {
  Card,
  ContainerText,
  ContainerButton,
  Title,
  Content,
  Button,
  Input,
  Finish
} from "./styles";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdTitle, MdGames } from "react-icons/md";
import { useContext } from "react";
import { HabitsContext } from "../../Providers/HabitsProvider";
import { TiBatteryFull } from "react-icons/ti";
import { GiLightningFrequency } from "react-icons/gi";
import { FiPercent } from "react-icons/fi";
import { toast } from "react-toastify";
import { IconButton } from "@material-ui/core";
const Habits = ({ habit }) => {
  const [isShow, setIsShow] = useState(true);
  const [inputValue, setInputValue] = useState(habit.how_much_achieved);
  const { removeHabit, updateHabit } = useContext(HabitsContext);

  const handleTrash = (id) => {
    removeHabit(id);
  };

  const handleUpdate = (id) => {
    if (inputValue > 100) {
      toast.error("Digite um valor válido");
      return;
    }
    if (inputValue < 100) {
      const data = {
        how_much_achieved: inputValue,
        achieved: false,
      };
      updateHabit(data, id);
      setIsShow(!isShow);
    } else {
      const data = {
        how_much_achieved: inputValue,
        achieved: true,
      };
      updateHabit(data, id);
      setIsShow(!isShow);
    }
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Card>
      <ContainerButton>
          <button className="finish" onClick={() => handleTrash(habit.id)}>
            <FaCheck color={"#FF6109"} size={20} />
          </button>
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
            <span>Frequência: </span>
            {habit.frequency}
          </span>
        </Content>
        <Content>
          <span>
            <FiPercent color="#FF6109" size={20} />
            <span>Progressão:</span>{" "}
            {isShow ? (
              habit.how_much_achieved + "%"
            ) : (
              <Input
                type="number"
                value={inputValue}
                onChange={handleChangeInput}
              ></Input>
            )}
            <button>
              {isShow ? (
                <IconButton color = "secondary" size = "small" >
                <FaEdit
                  color="#FF6109"
                  size={20}
                  onClick={() => setIsShow(!isShow)}
                />
                </IconButton>
              ) : (
                <IconButton color = "secondary" size = "small">
                <FaCheck
                  color="#FF6109"
                  size={20}
                  onClick={() => handleUpdate(habit.id)}
                />
                </IconButton>
              )}
            </button>
          </span>
        </Content>
      </ContainerText>
    </Card>
  );
};

export default Habits;
