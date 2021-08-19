/* eslint-disable react-hooks/exhaustive-deps */
import { AddIcon, Container, OverflowGoals, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Goal from "../Goal";
import ModalGoals from "../ModalGoals";
import { GoalsContext } from "../../Providers/GoalsProvider";
import { IconButton } from "@material-ui/core";

const Goals = ({ groupID }) => {
  const [showModal, setShowModal] = useState(false);
  const { goals, getAllGoals } = useContext(GoalsContext);

  const handleAddGoals = () => {
    setShowModal(!showModal);
    getAllGoals(groupID, 1);
  };

  useEffect(() => {
    getAllGoals(groupID, 1);
  }, [goals]);

  return (
    <Container>
      <AddIcon onClick={() => handleAddGoals()}>
        <IconButton>
          <MdLibraryAdd size="25" color="var(--orange)" />
        </IconButton>
      </AddIcon>
      <SearchIcon>
        <IconButton>
          <FaSearch size="25" color="var(--orange)" />
        </IconButton>
      </SearchIcon>
      <h3>Metas</h3>
      {showModal && (
        <ModalGoals
          setShowModal={setShowModal}
          showModal={showModal}
          groupID={groupID}
        />
      )}
      <OverflowGoals>
        {goals?.map((x, y) => (
          <Goal key={y} obj={x} />
        ))}
      </OverflowGoals>
    </Container>
  );
};

export default Goals;
