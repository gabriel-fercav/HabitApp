import { useState, useContext } from "react";
import { Container, ContainerInput } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@material-ui/icons/Close";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { UserContext } from "../../Providers/UserProvider";
import { HabitsContext } from "../../Providers/HabitsProvider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    margin: "0.5rem 0",
  },
  radio: {
    display: "flex",
    flexDirection: "row",
  },
});

const ModalHabits = ({ setShowModal, showModal }) => {
  const [difficulty, setDifficulty] = useState("Fácil");
  const [category, setCategory] = useState("Moba");
  const [achieved, setAchieved] = useState("true");
  const { id } = useContext(UserContext);
  const { addHabit } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
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

  const handleInputCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleInputAchieved = (event) => {
    setAchieved(event.target.value);
  };

  const handleClosed = () => {
    setShowModal(!showModal);
  };

  const handleSubmitFunction = (data) => {
    const { how_much_achieved, title, frequency } = data;
    const newData = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: !!achieved,
      how_much_achieved: how_much_achieved,
      user: id,
    };
    console.log(newData);
    addHabit(newData);
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

        <FormControl fullWidth className={classes.input}>
          <InputLabel>Categoria</InputLabel>
          <Select
            value={category}
            onChange={handleInputCategory}
            name="category"
          >
            <MenuItem value="Moba">Moba</MenuItem>
            <MenuItem value="FPS">FPS</MenuItem>
            <MenuItem value="MMA">MMA</MenuItem>
          </Select>
        </FormControl>
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
        <TextField
          className={classes.input}
          required
          variant="outlined"
          label="Frequencia"
          fullWidth
          {...register("frequency")}
          error={!!errors.frequency}
        />
        <FormControl component="fieldset" fullWidth className={classes.input}>
          <FormLabel component="legend">alcançado: </FormLabel>
          <RadioGroup
            aria-label="alcançado"
            name="achieved"
            value={achieved}
            onChange={handleInputAchieved}
            className={classes.radio}
          >
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
        <ContainerInput>
          <label htmlFor="how_much_achieved">Quanto voce alcançou? </label>
          <input type="number" {...register("how_much_achieved")} />
        </ContainerInput>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default ModalHabits;
