import { Container, IdGroup, Informations } from "./style";

const GroupComponent = () => {
  return (
    <Container>
      <img
        src="https://pbs.twimg.com/profile_images/1625090372/logo_400x400.png"
        alt="imagem do grupo"
        width="100"
      />
      <IdGroup>
        <p>1934</p>
      </IdGroup>
      <Informations>
        <h2>LOL Mobile</h2>
        <p>Grupo Rushadão</p>
      </Informations>
      <span>Adm: Guilherme Ciole</span>
      <button>Entrar</button>
    </Container>
  );
};

export default GroupComponent;
