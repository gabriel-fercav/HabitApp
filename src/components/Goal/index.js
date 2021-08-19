import { Container, DeleteIcon, EditIcon } from "./style";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useContext } from 'react'
import { GoalsContext } from "../../Providers/GoalsProvider";
import { GoGraph } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { IconButton } from "@material-ui/core";

const Goal = ({obj}) => {

  const { delGoal } = useContext(GoalsContext)

  return (
    <Container>
      <DeleteIcon onClick={() => delGoal(obj.id)}>
        <IconButton color = "secondary">
          <MdDeleteForever size="30" color="var(--orange)" />
        </IconButton>
      </DeleteIcon>
      <div>
        <span>
          <FaFire size="20" color="var(--orange)" />
        </span>
        <h4>{obj.title}</h4>
      </div>
      <div>
        <span>
          <GoGraph size="20" color="var(--orange)" />
        </span>
        <h4>{obj.difficulty}</h4>
      </div>
      <EditIcon>
        <IconButton color = "secondary" >
          <MdEdit size="30" color="var(--orange)" />
        </IconButton>
      </EditIcon>
    </Container>
  );
};

export default Goal;
