import { AddIcon, Container, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Goal from "../Goal";

const Goals = () => {
  return (
    <Container>
      <AddIcon>
        <MdLibraryAdd size="25" color="var(--orange)" />
      </AddIcon>
      <SearchIcon>
        <FaSearch size="25" color="var(--orange)" />
      </SearchIcon>
      <h3>Metas</h3>
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
    </Container>
  );
};

export default Goals;
