import Header from "../../components/Header";
import GroupsComponent from "../../components/GroupsComponent";
import { FaSearch } from "react-icons/fa";
import { Page, SearchIcon } from "./style";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";

const Groups = () => {

  const { groups } = useContext(GroupsContext)


  return (
    <Page>
      <Header></Header>
      <input placeholder="Id do grupo" />
      <SearchIcon>
        <FaSearch color="#ff6109" size="20"/>
      </SearchIcon>
      <GroupsComponent groups={groups}/>
    </Page>
  );
};

export default Groups;
