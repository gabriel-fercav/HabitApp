/* eslint-disable react-hooks/exhaustive-deps */
import Activity from "../Activity";
import { AddIcon, Container, OverflowActivities, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ActivitiesContext } from "../../Providers/ActivitiesProvider";
import { useState } from "react";
import ModalActivities from "../ModalActivities";

const Activities = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const { getGroupActivities, activities } = useContext(ActivitiesContext);

  const handleAddActivities = () => {
    setShowModal(!showModal);
    getGroupActivities(id);
  };

  useEffect(() => {
    getGroupActivities(id);
  }, [activities]);

  return (
    <Container>
      <AddIcon>
        <IconButton>
          <MdLibraryAdd
            size="25"
            color="var(--orange)"
            onClick={handleAddActivities}
          />
        </IconButton>
      </AddIcon>
      <SearchIcon>
        <IconButton>
          <FaSearch size="25" color="var(--orange)" />
        </IconButton>
      </SearchIcon>
      <h3>Atividades</h3>
      {showModal && (
        <ModalActivities
          setShowModal={setShowModal}
          showModal={showModal}
          id={id}
        />
      )}
      <OverflowActivities>
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </OverflowActivities>
    </Container>
  );
};

export default Activities;
