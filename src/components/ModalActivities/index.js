import { useState, useContext } from "react";
import { Container, ContainerInput } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@material-ui/icons/Close";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
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
  /* const [ difficulty, setDifficulty ] = useState("Fácil"); */

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

  /* const handleInputDificulty = (event) => {
    setDifficulty(event.target.value);
  }; */

  const handleClosed = () => {
    setShowModal(!showModal);
  };

  const handleSubmitFunction = (data) => {
    const { title, realization_time } = data;
    const newData = {
      title: title,
      /* difficulty: difficulty, */
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

        <p>Data: ano-mês-dia</p>
        <p>Hora: horas:minutos:segundos</p>
        <p>Exemplo: 2021-08-20 09:55:00</p>
        {/* <FormControl required fullWidth className={classes.input}>
          <InputLabel>Dificuldade</InputLabel>
          <Select
            value={difficulty}
            onChange={handleInputDificulty}
            name="dificulty"
          >
            <MenuItem value="Fácil">Fácil</MenuItem>
            <MenuItem value="Médio">Médio</MenuItem>
            <MenuItem value="Difícil">Difícil</MenuItem>
          </Select>
        </FormControl> */}
        {/* <ContainerInput>
          <label htmlFor="realization_time">Quanto você atingiu? </label>
          <input type="number" {...register("realization_time")} />
        </ContainerInput> */}
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default ModalActivities;
