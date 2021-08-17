import GroupCard from "../GroupCard";
import { Titulo, Container } from "./style";

const GroupsComponent = ({groups}) => {
  return (
    <Container>
      <Titulo>
        <p>Grupos</p>
      </Titulo>
<<<<<<< HEAD

      {/* <Group />
      <Group />
      <Group />
      <Group /> */}
=======
      {groups.map(x => <GroupCard obj={x}/>)}
>>>>>>> feature/dashboard-groups
    </Container>
  );
};

export default GroupsComponent;
