import { useContext } from "react";
import Activities from "../../components/Activities";
import Goals from "../../components/Goals";
import Header from "../../components/Header";
import { GroupsContext } from "../../Providers/GroupsProvider";
import {
  Container,
  ContainerCreator,
  ContainerUsers,
  Content,
  IconSubscription,
} from "./style";
import { IoLogIn } from "react-icons/io5";

const Group = () => {
  const { group } = useContext(GroupsContext);
  const { users_on_group } = group;
  return (
    <Container>
      <Header />
      <h2>{group.name}</h2>
      <p>{group.description}</p>
      <IconSubscription>
        <IoLogIn color="var(--orange)" size="45" />
      </IconSubscription>
      <ContainerCreator>
        <h3>
          Criador:
          <span> {group.creator?.username}</span>
        </h3>
        <h3>
          Categoria: <span>{group.category}</span>
        </h3>
      </ContainerCreator>
      <ContainerUsers>
        <h3>Usuários</h3>
        {users_on_group?.map((user) => {
          return user.username;
        })}
      </ContainerUsers>
      <Content>
        <Goals />
        <Activities />
      </Content>
    </Container>
  );
};

export default Group;
