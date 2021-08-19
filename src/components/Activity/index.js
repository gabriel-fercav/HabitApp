import { Container, DeleteIcon, EditIcon } from "./style";
import { MdStars } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaCheck } from "react-icons/fa"
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
        <FaCheck color={"#FF6109"} size={20} />
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
    </Container>
  );
};

export default Activity;
