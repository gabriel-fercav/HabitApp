import Activity from "../Activity";
import { AddIcon, Container, SearchIcon } from "./style";
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
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </Container>
  );
};

export default Activities;
