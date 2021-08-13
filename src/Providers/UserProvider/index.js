import api from "../../services/api";
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
    api
      .post("/users/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success("Usuário cadastrado com sucesso");
      })
      .catch((err) => toast.error("Email já cadastrado"));
  };

  const getUser = (id) => {
    api.get(`/users/${id}/`).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  };

  const signIn = (data) => {
    api
      .post("/sessions/", data, {
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
    localStorage.clear();
    setToken("");
  };

  const updateUser = (data) => {
    const { id, username } = data;
    const dataAtt = {
      username: username,
    };
    api.patch(`/users/${id}`, dataAtt);
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
        signIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
