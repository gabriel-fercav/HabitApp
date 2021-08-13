import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">

      </Route>
      <Route path="/user">

      </Route>
      <Route path="/group">

      </Route>
      <Route path="/group:id">
        
      </Route>
    </Switch>
  )
};

export default Routes;
