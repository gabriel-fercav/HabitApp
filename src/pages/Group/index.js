import { useContext } from "react";
import Activities from "../../components/Activities";
import Goals from "../../components/Goals";
import Header from "../../components/Header";
import { GroupsContext } from "../../Providers/GroupsProvider";
import { Container, ContainerCreator, ContainerUsers, Content } from "./style";

const Group = () => {
  const { group } = useContext(GroupsContext);
  return (
    <Container>
      {console.log(group[0].id)}
      <Header />
      <h2>LOL Mobile</h2>
      <p>Grupo ruchadão</p>
      <ContainerCreator>
        <h3>
          Criador: <span>Leandro Soares</span>
        </h3>
        <h3>
          Categoria: <span>Gamer da pesada</span>
        </h3>
      </ContainerCreator>
      <ContainerUsers>
        <h3>Usuários</h3>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
        <p>Guilherme Ciole</p>
      </ContainerUsers>
      <Content>
        <Goals />
        <Activities />
      </Content>
    </Container>
  );
};

export default Group;
