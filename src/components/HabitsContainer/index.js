import { useContext, useState } from "react";
import { Container, Content, ContainerCards, Title, Button } from "./styles";
import ModalHabits from "../ModalHabits";
import { IoAddCircle } from "react-icons/io5";
import Habits from "./../Habits";
import { HabitsContext } from "../../Providers/HabitsProvider";

const HabitsContainer = () => {
  const [showModal, setShowModal] = useState(false);

  //const habits = {
  //  id: 123,
  //  title: "Lolzinho na RANK",
  //  category: "game",
  //  dificulty: "Easy",
  //  frequency: "80",
  //  achieved: true,
  //};

  const { habits } = useContext(HabitsContext);
  console.log(habits);
  const handleAddHabits = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Button onClick={() => handleAddHabits()}>
        <IoAddCircle size={"25px"} color={"#0BAC1B"} />
      </Button>
      <Content>
        <Title> Meus Hábitos </Title>

        <ContainerCards>
          {habits?.map((habit) => (
            <Habits key={habit.id} habit={habit} />
          ))}
          {/*<Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />*/}
        </ContainerCards>
      </Content>
      {showModal && (
        <ModalHabits setShowModal={setShowModal} showModal={showModal} />
      )}
    </Container>
  );
};

export default HabitsContainer;
