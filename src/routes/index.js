import { Switch, Route } from "react-router-dom";
import Groups from "../pages/Groups";
import Login from "../pages/login";
import Registration from "../pages/registration";
import Home from "../pages/Home";
import Group from "../pages/Group";
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
        <Groups />
      </Route>
      <Route exact path="/group/:id">
        <Group />
      </Route>
    </Switch>
  );
};

export default Routes;
