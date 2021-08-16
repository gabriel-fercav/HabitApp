import { Switch, Route } from "react-router-dom";
import Groups from "../pages/Groups";
import Login from "../pages/login";
import Registration from "../pages/registration";
import Home from "../pages/Home";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Registration />
      </Route>
      <Route path="/user">
        <Home />
      </Route>
      <Route path="/groups">
        <Groups/>
      </Route>
      <Route path="/group"></Route>
      <Route path="/group:id"></Route>
    </Switch>
  );
};

export default Routes;
