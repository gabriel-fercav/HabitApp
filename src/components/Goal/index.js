import { Container, DeleteIcon, EditIcon } from "./style";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaFire } from "react-icons/fa";

const Goal = () => {
  return (
    <Container>
      <DeleteIcon>
        <MdDeleteForever size="30" color="var(--orange)" />
      </DeleteIcon>
      <div>
        <span>
          <FaFire size="20" color="var(--orange)" />
        </span>
        <h4>Não faltar, nenhum dia.</h4>
      </div>
      <div>
        <span>
          <GoGraph size="20" color="var(--orange)" />
        </span>
        <h4>Médio</h4>
      </div>
      <EditIcon>
        <MdEdit size="30" color="var(--orange)" />
      </EditIcon>
    </Container>
  );
};

export default Goal;
