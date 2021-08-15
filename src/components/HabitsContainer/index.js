import { useContext } from "react";
import { Container, Content, ContainerCards, Title, Button } from "./styles";
import { IoAddCircle } from "react-icons/io5";
import Habits from "./../Habits";
const HabitsContainer = () => {
  const habits = {
    title: "Lolzinho na RANK",
    category: "game",
    dificulty: "Easy",
    frequency: "80",
    achieved: true,
  };

  return (
    <Container>
      <Button>
        <IoAddCircle size={"25px"} color={"#0BAC1B"} />
      </Button>
      <Content>
        <Title> Meus Hábitos </Title>

        {/* provider.map((a) => < Habits key = {a.id} habits = {a} /> ) */}
        <ContainerCards>
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
          <Habits habits={habits} />
        </ContainerCards>
      </Content>
    </Container>
  );
};

export default HabitsContainer;
