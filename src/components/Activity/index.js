import { Container, DeleteIcon, EditIcon } from "./style";
import { MdStars, MdDeleteForever, MdEdit } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const Activity = ({ activity }) => {
  return (
    <Container>
      <DeleteIcon>
        <MdDeleteForever size="30" color="var(--orange)" />
      </DeleteIcon>
      <div>
        <span>
          <MdStars size="20" color="var(--orange)" />
        </span>
        <h4>{activity.title}</h4>
      </div>
      <div>
        <span>
          <IoTime size="20" color="var(--orange)" />
        </span>
        <h4>{activity.realization_time}</h4>
      </div>
      <EditIcon>
        <MdEdit size="30" color="var(--orange)" />
      </EditIcon>
    </Container>
  );
};

export default Activity;
