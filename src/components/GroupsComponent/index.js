import GroupCard from "../GroupCard";
import { Titulo, Container } from "./style";

const GroupsComponent = ({groups}) => {
  console.log(groups)
  return (
    <Container>
      <Titulo>
        <p>Grupos</p>
      </Titulo>
      {groups.map(x => <GroupCard obj={x}/>)}
    </Container>
  );
};

export default GroupsComponent;
