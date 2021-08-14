import Header from "../../components/Header";
import GroupsComponent from "../../components/GroupsComponent";
import { FaSearch } from "react-icons/fa";
import { Page, SearchIcon } from "./style";

const Groups = () => {
  return (
    <Page>
      <Header></Header>
      <input placeholder="Id do grupo" />
      <SearchIcon>
        <FaSearch color="#ff6109" size="20"/>
      </SearchIcon>
      <GroupsComponent></GroupsComponent>
    </Page>
  );
};

export default Groups;
