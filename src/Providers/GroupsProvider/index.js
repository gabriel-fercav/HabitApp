import api from "./../../services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@habit:token")) || "";
  const [setParams] = useState({ category: "", page: 1 });
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState([]);

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  const getGroups = () => {
    api.get("/groups/").then((response) => setGroups(response.data.results));
  };

  const specificGroup = (id) => {
    api
      .get(`/groups/${id}/`, config)
      .then((response) => setGroup(response.data))
      .cath((err) => console.log(err));
  };

  useEffect(() => {
    getGroups();
  }, []);

  const subGroup = (id) => {
    api
      .post(`/groups/${id}/subscribe/`)
      .then((_) => toast.success("Inscrito com sucesso!"))
      .catch((_) => toast.error("Nao foi possivel se inscrever "));
    setGroups(api.get("/groups/subscriptions/", config));
  };

  const categoryGroup = (params) => {
    const { category, page } = params;
    setParams({ category: category || "", page: page || 1 });
    getGroups();
  };

  const editGroup = (id, data) => {
    api
      .patch(`groups/${id}`, data, config)
      .then((_) => toast.success("grupo modificado com sucesso"))
      .catch((_) => toast.error("Nao foi possivel atualizar o grupo"));
    getGroups();
  };

  const addGroup = (data) => {
    api
      .post("/groups/", data, config)
      .then((_) => toast.success("Grupo criado com sucesso"))
      .catch("Nao foi possivel criar o grupo");
    getGroups();
  };

  const searchGroup = (id) => {
    return api.get(`/groups/${id}`).then((res) => res.data);
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        group,
        subGroup,
        getGroups,
        specificGroup,
        categoryGroup,
        editGroup,
        addGroup,
        searchGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
