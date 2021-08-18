import { AddIcon, Container, Content, ContainerCard, Titulo } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";
import GroupCard from "../GroupCard";
import ModalMyGroup from "../ModalMyGroup";
const MyGroups = () => {
  const { groups } = useContext(GroupsContext);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleAddGroup = (setIsShowModal, isShowModal) => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <Container>
        <AddIcon>
          <button onClick={() => handleAddGroup(setIsShowModal, isShowModal)}>
            <MdLibraryAdd size="30" color="#ff6109" />
          </button>
        </AddIcon>
        <Content>
          <p>Meus grupos</p>
          <ContainerCard>
            {groups.map((group) => (
              <GroupCard obj={group} key={group.id} />
            ))}
          </ContainerCard>
        </Content>
      </Container>
      {isShowModal && (
        <ModalMyGroup
          setIsShowModal={setIsShowModal}
          isShowModal={isShowModal}
        />
      )}
    </>
  );
};

export default MyGroups;
