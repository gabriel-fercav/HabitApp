import { AddIcon, Container, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react'
import Goal from "../Goal";
import ModalGoals from "../ModalGoals";

const Goals = ({groupID}) => {

  const [showModal, setShowModal] = useState(false)

  const handleAddGoals = () => {
    setShowModal(!showModal);
  };


  return (
    <Container>
      <AddIcon onClick={() => handleAddGoals()}>
        <MdLibraryAdd size="25" color="var(--orange)" />
      </AddIcon>
      <SearchIcon>
        <FaSearch size="25" color="var(--orange)" />
      </SearchIcon>
      <h3>Metas</h3>
      {showModal && (
        <ModalGoals setShowModal={setShowModal} showModal={showModal} groupID={groupID} />
      )}
      <Goal />
    </Container>
  );
};

export default Goals;
