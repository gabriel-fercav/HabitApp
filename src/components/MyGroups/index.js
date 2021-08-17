import Group from "../Group";
import { AddIcon, Container, Titulo } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";

const MyGroups = () => {
  const { groups } = useContext(GroupsContext);
  return (
    <Container>
      <Titulo>
        <p>Meus grupos</p>
      </Titulo>
      <AddIcon>
        <MdLibraryAdd size="35" color="#ff6109" />
      </AddIcon>
      {groups.map((group) => (
        <Group group={group} key={group.id} />
      ))}
      {/* <Group />
      <Group />
      <Group />
      <Group /> */}
    </Container>
  );
};

export default MyGroups;
