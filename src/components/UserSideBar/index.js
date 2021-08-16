import { Container, ContentName, ContentEmail } from "./style";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserProvider";

const UserSideBar = () => {


  const [active, setActive] = useState(false)
  const [newUser, setNewUser] = useState("")
  const { id, username, email, updateUser, getUser } = useContext(UserContext)

  const nameChange = (id, newUsername) => {
    const data = { id: id, username: newUsername }
    updateUser(data)
    getUser(id)
    setActive(false)
  }

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
        {active ?
          <>
            <input focus="true" onChange={(e) => setNewUser(e.target.value)} placeholder="Digite..." />
            <button onClick={() => nameChange(id, newUser)}>X</button>
          </>
          :
          <h2 onClick={() => setActive(true)}>{username}</h2>
        }

      </ContentName>
      <ContentEmail>
        <MdEmail color="#FF6109" size="20" />
        <p>{email}</p>
      </ContentEmail>
    </Container>
  );
};

export default UserSideBar;
