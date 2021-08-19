import { useContext, useState } from "react";
import { Container, Content, ContainerCards, Title, Button } from "./styles";
import ModalHabits from "../ModalHabits";
import { IoAddCircle } from "react-icons/io5";
import Habits from "./../Habits";
import { HabitsContext } from "../../Providers/HabitsProvider";
import { IconButton } from "@material-ui/core";

const HabitsContainer = () => {
  const [showModal, setShowModal] = useState(false);

  const { habits } = useContext(HabitsContext);
  const handleAddHabits = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <IconButton style = {Button} onClick={() => handleAddHabits()}>
        <IoAddCircle size={"25px"} color={"#ff6109"} />
      </IconButton>
      <Content>
        <Title> Meus Hábitos </Title>

        <ContainerCards>
          {habits?.map((habit) => (
            <Habits key={habit.id} habit={habit} />
          ))}
        </ContainerCards>
      </Content>
      {showModal && (
        <ModalHabits setShowModal={setShowModal} showModal={showModal} />
      )}
    </Container>
  );
};

export default HabitsContainer;
