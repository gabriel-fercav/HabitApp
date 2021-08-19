import { AddIcon, Container, Content, ContainerCard } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";
import GroupCard from "../GroupCard";
import ModalMyGroup from "../ModalMyGroup";
import { IconButton } from "@material-ui/core";
const MyGroups = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleAddGroup = (setIsShowModal, isShowModal) => {
    setIsShowModal(!isShowModal);
  };

  const { subGroups } = useContext(GroupsContext);
  return (
    <>
      <Container>
        <AddIcon>
          <IconButton
            className="iconButton"
            onClick={() => handleAddGroup(setIsShowModal, isShowModal)}
          >
            <MdLibraryAdd size="30" color="#ff6109" />
          </IconButton>
        </AddIcon>
        <Content>
          <p>Meus grupos</p>
          <ContainerCard>
            {subGroups.map((group) => (
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
