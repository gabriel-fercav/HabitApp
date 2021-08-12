import { Container } from "./style";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";

const UserSideBar = () => {
  return (
    <Container>
      <image>
        <img
          src="https://w7.pngwing.com/pngs/181/273/png-transparent-playerunknown-s-battlegrounds-computer-icons-user-avatar-miscellaneous-video-game-fictional-character.png"
          width="150"
          alt="avatar de usuário"
        ></img>
        <RiPencilFill color="#FF6109" size="30" />
      </image>
      <contentName>
        <FaUserCircle color="#FF6109" size="15" />
        <h2>Guilherme Ciole</h2>
      </contentName>
      <contentEmail>
        <MdEmail color="#FF6109" size="15" />
        <p>guilhermeciole@email.com</p>
      </contentEmail>
      <iconPencil></iconPencil>
    </Container>
  );
};

export default UserSideBar;
