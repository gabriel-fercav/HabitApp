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
  OverflowUsers,
} from "./style";
import { IoLogIn } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IconButton } from "@material-ui/core";

const Group = () => {
  const { group, specificGroup } = useContext(GroupsContext);
  const { users_on_group } = group;
  const { subGroup } = useContext(GroupsContext);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      specificGroup(id);
    }
  }, []);

  const handleClick = (id) => {
    subGroup(id);
  };

  return (
    <Container>
      <Header />
      <h2>{group.name}</h2>
      <p>{group.description}</p>
      <IconSubscription>
        <IconButton color = "rgba(0, 0, 0, 0.54)">
        <IoLogIn
          color="var(--orange)"
          size="45"
          onClick={() => handleClick(group.id)}
        />
        </IconButton>
      </IconSubscription>
      <ContainerCreator>
        <h3>
          Criador:
          <span> {group.creator?.username}</span>
        </h3>
      </ContainerCreator>
      <ContainerUsers>
        <h3>Usuários</h3>
        <OverflowUsers>
          {users_on_group?.map((user) => {
            return <p>{user.username}</p>;
          })}
        </OverflowUsers>
      </ContainerUsers>
      <Content>
        <Goals groupID={id} />
        <Activities id={id} />
      </Content>
    </Container>
  );
};

export default Group;
