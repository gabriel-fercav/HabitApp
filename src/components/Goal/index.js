import { Container, DeleteIcon, EditIcon } from "./style";
import { FaCheck } from "react-icons/fa";
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
        <FaCheck color={"#FF6109"} size={20} />
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
    </Container>
  );
};

export default Goal;
