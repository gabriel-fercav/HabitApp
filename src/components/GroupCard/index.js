import {
  Container,
  ContainerButton,
  Content,
  IdGroup,
  Informations,
} from "./style";
import { useHistory } from "react-router";
const GroupCard = ({ obj }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/group/${id}/`);
  };

  return (
    <Container>
      <IdGroup>
        <p>{obj.id}</p>
      </IdGroup>
      <Content>
        <img
          src="https://pbs.twimg.com/profile_images/1625090372/logo_400x400.png"
          alt="imagem do grupo"
          width="100"
        />
        <Informations>
          <h2>{obj.name}</h2>
          <p>{obj.description}</p>
        </Informations>
        <span>Criador: {obj.creator.username}</span>
        <ContainerButton>
          <button onClick={() => handleClick(obj.id)}>Abrir</button>
        </ContainerButton>
      </Content>
    </Container>
  );
};

export default GroupCard;
