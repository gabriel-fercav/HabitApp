/* eslint-disable no-unused-vars */
import { Container, Content, FormContainer, Button } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/GroupsProvider";

const ModalMyGroup = ({ setIsShowModal, isShowModal }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { addGroup } = useContext(GroupsContext);

  const handleSubmitFunction = (data) => {
    const { name, description } = data;
    const newData = {
      name: name,
      description: description,
      category: "Gamer",
    };
    console.log(newData);
    addGroup(newData);
    setIsShowModal(!isShowModal);
  };

  return (
    <Container>
      <span>
        <button onClick={() => setIsShowModal(!isShowModal)}>
          <CloseIcon />
        </button>
      </span>
      <Content>
        <h2>Cadastre um grupo</h2>
        <FormContainer onSubmit={handleSubmit(handleSubmitFunction)}>
          <div>
            <TextField fullWidth label="name" {...register("name")} />
          </div>
          <div>
            <TextField
              fullWidth
              label="description"
              {...register("description")}
            />
          </div>
          <div>
            <Button type="submit">Entrar</Button>
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default ModalMyGroup;
