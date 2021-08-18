import { Container, IdGroup, Informations } from "./style";
import { useHistory } from "react-router";

const GroupCard = ({obj}) => {
  const history = useHistory();
  
  const handleClick = (id) => {
    history.push(`/group/${id}/`);
  }  

  return (
    <Container>
      <img
        src="https://pbs.twimg.com/profile_images/1625090372/logo_400x400.png"
        alt="imagem do grupo"
        width="100"
      />
      <IdGroup>
        <p>{obj.id}</p>
      </IdGroup>
      <Informations>
        <h2>{obj.name}</h2>
        <p>{obj.description}</p>
      </Informations>
      <span>Criador: {obj.creator.username}</span>
      <button onClick={() => handleClick(obj.id)}>Entrar</button>
    </Container>
  );
};

export default GroupCard;
