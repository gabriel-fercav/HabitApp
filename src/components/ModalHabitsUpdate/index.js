import { useState } from "react";
import { ContainerInput, Container, Form } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useContext } from "react";

import { HabitsContext } from "../../Providers/HabitsProvider";

const useStyles = makeStyles({
  input: {
    margin: "0.5rem 0",
  },
  radio: {
    display: "flex",
    flexDirection: "row",
  },
});
const ModalHabitsUpdate = ({ id }) => {
  const [achieved, setAchieved] = useState("true");

  const { updateHabit } = useContext(HabitsContext);

  const schema = yup.object().shape({
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

  const classes = useStyles();

  const handleInputAchieved = (event) => {
    setAchieved(event.target.value);
  };

  const handleSubmitFunction = (data) => {
    const { how_much_achieved } = data;
    const newData = {
      how_much_achieved: how_much_achieved,
      achieved: !!achieved,
    };
    console.log(newData);

    updateHabit(id, newData);
  };

  return (
    <Container>
      <span>
        <button>
          <CloseIcon />
        </button>
      </span>
      <Form onSubmit={handleSubmit(handleSubmitFunction)}>
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
        <button>Entrar</button>
      </Form>
    </Container>
  );
};

export default ModalHabitsUpdate;
