import { useState, useContext } from "react";
import { Container, ContainerInput } from "./styles";
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
import { GoalsContext } from "../../Providers/GoalsProvider";

const useStyles = makeStyles({
  input: {
    margin: "0.5rem 0",
  },
  radio: {
    display: "flex",
    flexDirection: "row",
  },
});

const ModalGoals = ({ setShowModal, showModal, groupID }) => {
  const [difficulty, setDifficulty] = useState("Fácil");

  const { createGoal } = useContext(GoalsContext)

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .number()
      .required("Campo obrigatório")
      .min(1)
      .max(99),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleInputDificulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleClosed = () => {
    setShowModal(!showModal);
  };

  const handleSubmitFunction = (data) => {
    const { title, difficulty, how_much_achieved, group } = data;
    const newData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: how_much_achieved,
      group: groupID,
    };
    createGoal(newData)
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
        <FormControl required fullWidth className={classes.input}>
          <InputLabel>Dificuldade</InputLabel>
          <Select
            value={difficulty}
            onChange={handleInputDificulty}
            name="dificulty"
          >
            <MenuItem value="Fácil">Fácil</MenuItem>
            <MenuItem value="Médio">Médio</MenuItem>
            <MenuItem value="Dificil">Dificil</MenuItem>
          </Select>
        </FormControl>
        <ContainerInput>
          <label htmlFor="how_much_achieved">Quanto você atingiu? </label>
          <input type="number" {...register("how_much_achieved")} />
        </ContainerInput>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default ModalGoals;
