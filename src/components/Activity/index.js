import { Container, DeleteIcon, EditIcon } from "./style";
import { MdStars, MdDeleteForever, MdEdit } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import { IoTime } from "react-icons/io5";

const Activity = ({ activity }) => {
  return (
    <Container>
      <DeleteIcon>
        <IconButton color = "secondary">
          <MdDeleteForever size="30" color="var(--orange)" />
        </IconButton>
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
        <IconButton color = "secondary">
          <MdEdit size="30" color="var(--orange)" />
        </IconButton>
      </EditIcon>
    </Container>
  );
};

export default Activity;
