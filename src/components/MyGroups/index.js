import Group from "../Group";
import { AddIcon, Container, Titulo } from "./style";
import { MdLibraryAdd } from "react-icons/md";

const MyGroups = () => {
  return (
    <Container>
      <Titulo>
        <p>Meus grupos</p>
      </Titulo>
      <AddIcon>
        <MdLibraryAdd size="35" color="#ff6109" />
      </AddIcon>
      <Group />
      <Group />
      <Group />
      <Group />
    </Container>
  );
};

export default MyGroups;
