import { Switch } from "react-router-dom";
import Groups from "../pages/Groups";
import Login from "../pages/login";
import Registration from "../pages/registration";
import Home from "../pages/Home";
import Group from "../pages/Group";
import Route from "./route";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Registration} />
      <Route isPrivate path="/user" component={Home} />
      <Route isPrivate path="/groups" component={Groups} />
      <Route isPrivate exact path="/group/:id" component={Group} />
    </Switch>
  );
};

export default Routes;
