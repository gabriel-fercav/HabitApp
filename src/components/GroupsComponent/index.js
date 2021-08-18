import GroupCard from "../GroupCard";
import { Titulo, Container } from "./style";

const GroupsComponent = ({ groups, single }) => {
  return (
    <Container>
      <Titulo>
        <p>Grupos</p>
      </Titulo>
      {groups === undefined ? (
        <GroupCard obj={single} />
      ) : (
        groups.map((x, y) => <GroupCard key={y} obj={x} />)
      )}
    </Container>
  );
};

export default GroupsComponent;
