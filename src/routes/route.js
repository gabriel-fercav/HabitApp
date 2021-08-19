import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { Redirect, Route as ReactDOMRoute } from "react-router";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useContext(UserContext);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "user"} />
        );
      }}
    />
  );
};

export default Route;
