import { useContext } from "react";
import { Container, Informations } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@material-ui/icons/Close";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ActivitiesContext } from "../../Providers/ActivitiesProvider";

const useStyles = makeStyles({
  input: {
    margin: "0.5rem 0",
  },
  radio: {
    display: "flex",
    flexDirection: "row",
  },
});

const ModalActivities = ({ setShowModal, showModal, id }) => {
  const { createActivity } = useContext(ActivitiesContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClosed = () => {
    setShowModal(!showModal);
  };

  const handleSubmitFunction = (data) => {
    const { title, realization_time } = data;
    const newData = {
      title: title,
      realization_time: realization_time,
      group: id,
    };
    console.log(newData);
    createActivity(newData);
    setShowModal(!showModal);
  };

  const classes = useStyles();

  return (
    <Container>
      <button onClick={handleClosed}>
        <CloseIcon size="40px" />
      </button>
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <TextField
          className={classes.input}
          {...register("title")}
          error={!!errors.title}
          variant="outlined"
          label="Título"
          fullWidth
        />
        <TextField
          className={classes.input}
          {...register("realization_time")}
          error={!!errors.realization_time}
          variant="outlined"
          label="Data e hora de realização"
          fullWidth
        />
        <Informations>
          <p>Data: ano-mês-dia</p>
          <p>Hora: horas:minutos:segundos</p>
          <p>Exemplo: 2021-08-20 09:55:00</p>
        </Informations>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default ModalActivities;
