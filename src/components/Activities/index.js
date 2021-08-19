import Activity from "../Activity";
import { AddIcon, Container, OverflowActivities, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Activities = () => {
  return (
    <Container>
      <AddIcon>
        <MdLibraryAdd size="25" color="var(--orange)" />
      </AddIcon>
      <SearchIcon>
        <FaSearch size="25" color="var(--orange)" />
      </SearchIcon>
      <h3>Atividades</h3>
      <OverflowActivities>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </OverflowActivities>
    </Container>
  );
};

export default Activities;
