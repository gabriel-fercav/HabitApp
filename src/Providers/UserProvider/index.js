import api from "../../services/api";
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@habit:token")) || ""
  );

  useEffect(() => {
    if (token) {
      const tokenDecoded = jwt_decode(token);
      const { user_id } = tokenDecoded;
      setId(user_id);
      getUser(user_id);
    }
  }, [token]);

  const createUser = (data) => {
    axios
      .post("https://kabit-api.herokuapp.com/users/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success("Usuário cadastrado com sucesso");
      })
      .catch((err) => toast.error("Algo deu errado! :("));
  };

  const getUser = (id) => {
    api.get(`/users/${id}/`).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  };

  const signIn = (data) => {
    axios.post("https://kabit-api.herokuapp.com/sessions/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("@habit:token", JSON.stringify(res.data.access));
        setToken(res.data.access);
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    setToken("");
    localStorage.clear();
  };

  const updateUser = (data) => {
    const { id, username } = data;
    const dataAtt = {
      username: username,
    };
    api.patch(`/users/${id}/`, dataAtt, { 
      headers: { 
        'Authorization': 'Bearer ' + token }
      });
  };

  return (
    <UserContext.Provider
      value={{
        id,
        username,
        email,
        token,
        setUsername,
        createUser,
        updateUser,
        getUser,
        signIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
