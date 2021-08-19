import Activity from "../Activity";
import { AddIcon, Container, SearchIcon } from "./style";
import { MdLibraryAdd } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";

const Activities = () => {
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
