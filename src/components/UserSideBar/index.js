import { Container, ContentName, ContentEmail } from "./style";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";

const UserSideBar = () => {
  return (
    <Container>
      <div>
        <img
          src="https://w7.pngwing.com/pngs/181/273/png-transparent-playerunknown-s-battlegrounds-computer-icons-user-avatar-miscellaneous-video-game-fictional-character.png"
          width="200"
          alt="avatar de usuário"
        ></img>
        <RiPencilFill color="#FF6109" size="30" />
      </div>
      <ContentName>
        <FaUserCircle color="#FF6109" size="20" />
        <h2>Ciole Guilherme</h2>
      </ContentName>
      <ContentEmail>
        <MdEmail color="#FF6109" size="20" />
        <p>guilhermeciope@email.com</p>
      </ContentEmail>
    </Container>
  );
};

export default UserSideBar;
