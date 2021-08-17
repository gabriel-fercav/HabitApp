import Header from "../../components/Header";
import GroupsComponent from "../../components/GroupsComponent";
import { FaSearch } from "react-icons/fa";
import { Page, SearchIcon } from "./style";
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";

const Groups = () => {

  const { groups } = useContext(GroupsContext)
  const [id, setId] = useState("")

  return (
    <Page>
      <Header></Header>
      <input
        placeholder="Id do grupo"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <SearchIcon>
        <FaSearch color="#ff6109" size="20" onClick={()=> console.log(id)} />
      </SearchIcon>
      <GroupsComponent groups={groups}/>
    </Page>
  );
};

export default Groups;
