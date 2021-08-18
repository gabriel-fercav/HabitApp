import { Main } from "./styles";
import Header from "../../components/Header";
import UserSideBar from "../../components/UserSideBar";
import HabitsContainer from "../../components/HabitsContainer";
import MyGroups from "../../components/MyGroups";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <UserSideBar />
        <HabitsContainer />
        <MyGroups />
      </Main>
    </>
  );
};

export default Home;
