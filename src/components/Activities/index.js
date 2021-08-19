import Activity from "../Activity";
import { AddIcon, Container, OverflowActivities, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ActivitiesContext } from "../../Providers/ActivitiesProvider";

const Activities = ({ id }) => {
  const { getGroupActivities, activities } = useContext(ActivitiesContext);

  useEffect(() => {
    getGroupActivities(id);
  }, []);

  console.log(activities);

  return (
    <Container>
      <AddIcon>
        <IconButton>
          <MdLibraryAdd size="25" color="var(--orange)" />
        </IconButton>
      </AddIcon>
      <SearchIcon>
        <IconButton>
          <FaSearch size="25" color="var(--orange)" />
        </IconButton>
      </SearchIcon>
      <h3>Atividades</h3>
      <OverflowActivities>
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </OverflowActivities>
    </Container>
  );
};

export default Activities;
