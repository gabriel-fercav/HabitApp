import Header from "../../components/Header";
// import GroupsComponent from "../../components/GroupsComponent";
import GroupCard from "../../components/GroupCard";
import { FaSearch } from "react-icons/fa";

import { Page, SearchIcon, Container } from "./style";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";

const Groups = () => {
  const { groups, oneGroup, searchGroup, setOneGroup } =
    useContext(GroupsContext);

  const search = (str) => {
    if (str === "") {
      testGroup();
    } else {
      searchGroup(str);
    }
  };

  const testGroup = () => {
    setOneGroup(undefined);
  };

  return (
    <Page>
      <Header></Header>
      <input
        placeholder="ID do Grupo"
        onChange={(e) => search(e.target.value)}
      />
      <SearchIcon>
        <FaSearch color="#ff6109" size="20" />
      </SearchIcon>
      <Container>
        {oneGroup === undefined ? (
          groups.map((x, y) => <GroupCard key={y} obj={x} />)
        ) : (
          <GroupCard obj={oneGroup} />
        )}
      </Container>
    </Page>
  );
};

export default Groups;
