import { Main } from "./styles";
import Header from "../../components/Header";
import UserSideBar from "../../components/UserSideBar";
import HabitsContainer from "../../components/HabitsContainer";
import MyGroups from "../../components/MyGroups";
import ModalHabitsUpdate from "../../components/ModalHabitsUpdate";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <UserSideBar />
        <HabitsContainer />
        <MyGroups />
        <ModalHabitsUpdate />
      </Main>
    </>
  );
};

export default Home;
