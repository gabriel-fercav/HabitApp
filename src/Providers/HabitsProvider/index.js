import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "./../../services/api";
import axios from "axios";

export const HabitsContext = createContext([]);
export const HabitsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@habit:token")) || "";
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  const [habits, setHabits] = useState([]);
  const getHabits = () => {
    api.get("/habits/personal/", config).then((res) => setHabits(res.data)) ||
      [].catch((err) => console.log(err));
  };
  useEffect(() => {
    getHabits();
  }, []);
  const addHabit = (item) => {
    axios
      .post("https://kabit-api.herokuapp.com/habits/", item, config)
      .then((_) => {
        toast.success("Habito criado com sucesso!");
        getHabits();
      })
      .catch((_) => toast.error(" Nao foi possivel criar o habito "));
  };
  const removeHabit = (id) => {
    api
      .delete(`/habits/${id}/`, config)
      .then((_) => {
        console.log("removido com sucesso");
        toast.success("Habito deletado com sucesso!");
        getHabits();
      })
      .catch((_) => {
        console.log("não foi possivel remover o item");
        toast.error("Nao foi possivel apagar o habito ");
      });
  };
  const updateHabit = (data) => {
    const { id, att } = data;
    api
      .patch(`habits/${id}`, att, config)
      .then((_) => toast.success("Habito atualizado com sucesso!"))
      .catch((_) => toast.error("Nao foi possivel atualizar o habito "));
    setHabits(
      api.get("/habits/personal/", config).then((res) => res.data || [])
    );
  };
  return (
    <HabitsContext.Provider
      value={{ habits, addHabit, removeHabit, updateHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
