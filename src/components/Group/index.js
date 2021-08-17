import { Container, IdGroup, Informations } from "./style";
import { useHistory } from "react-router";

const GroupComponent = ({ group }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/group/${id}/`);
  };

  return (
    <Container>
      <img
        src="https://pbs.twimg.com/profile_images/1625090372/logo_400x400.png"
        alt="imagem do grupo"
        width="100"
      />
      <IdGroup>
        <p>{group.id}</p>
      </IdGroup>
      <Informations>
        <h2>{group.name}</h2>
        <p>{group.description}</p>
      </Informations>
      <span>Adm: {group.creator.username}</span>
      <button onClick={() => handleClick(group.id)}>Entrar</button>
    </Container>
  );
};

export default GroupComponent;
