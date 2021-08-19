import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "./../../services/api";
import { UserContext } from "../UserProvider";
export const GoalsContext = createContext([]);
export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [oneGoal, setOneGoal] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const [previousPage, setPreviousPage] = useState(false);

  //const token = JSON.parse(localStorage.getItem("@habit:token")) || ""
  const { token } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getAllGoals = (groupID, page) => {
    api
      .get(`/goals/?group=${groupID}&page=${page}`, {
        header: { Authorization: "Bearer null" },
      })
      .then((response) => setGoals(response.data.results));
  };

  const createGoal = (data) => {
    api
      .post("/goals/", data, config)
      .then((_) => toast.success("Meta criada com sucesso!"))
      .catch((err) => toast.error(`Não foi possível criar a meta: "${err}"`));
  };

  const delGoal = (id) => {
    api
      .delete(`goals/${id}/`, config)
      .then((_) => toast.success("Meta deletada com sucesso!"))
      .catch((err) => toast.error(`Nao foi possivel apagar a meta: "${err}"`));
  };

  /*
    const getOneGoal = (id) => {
        api.get(`/goals/${id}/`).then((res) => setOneGoal(res.data))
    }

    const modGoal = (id) => {
        api.patch(`/goals/${id}/`, config).then((_) => toast.success("Meta atualizada com sucesso!")).catch((err) => toast.error(`Nao foi possivel atualizar a meta: "${err}"`))
    }
    */

  return (
    <GoalsContext.Provider
      value={{
        goals,
        oneGoal,
        nextPage,
        previousPage,
        getAllGoals,
        createGoal,
        delGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
