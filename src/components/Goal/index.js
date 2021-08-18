import { Container, DeleteIcon, EditIcon } from "./style";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useContext } from 'react'
import { GoalsContext } from "../../Providers/GoalsProvider";
import { GoGraph } from "react-icons/go";
import { FaFire } from "react-icons/fa";

const Goal = ({obj}) => {

  const { delGoal } = useContext(GoalsContext)

  return (
    <Container>
      <DeleteIcon onClick={() => delGoal(obj.id)}>
        <MdDeleteForever size="30" color="var(--orange)" />
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
        <MdEdit size="30" color="var(--orange)" />
      </EditIcon>
    </Container>
  );
};

export default Goal;
