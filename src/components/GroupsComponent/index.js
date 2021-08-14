import Group from "../Group";
import { Titulo, Container } from "./style";

const GroupsComponent = () => {
  return (
    <Container>
      <Titulo>
        <p>Grupos</p>
      </Titulo>
      <Group />
      <Group />
      <Group />
      <Group />
    </Container>
  );
};

export default GroupsComponent;
