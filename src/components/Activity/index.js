import { Container, DeleteIcon, EditIcon } from "./style";
import { MdStars, MdDeleteForever, MdEdit } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import { IoTime } from "react-icons/io5";
import { format, utcToZonedTime } from "date-fns-tz";
const Activity = ({ activity }) => {
  const date = activity.realization_time;
  const timeZone = "Brasil/São Paulo";
  const zonedDate = utcToZonedTime(date, timeZone);
  const pattern = "dd.MM.yyyy HH:mm:ss";
  const output = format(zonedDate, pattern, { timeZone: timeZone });

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
        <h4>{output}</h4>
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
