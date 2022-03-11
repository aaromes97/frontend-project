import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import { logout } from "./components/auth/LoginPage/service";
import DetailAdvertPage from "./components/adverts/DetailPage/DetailAdvertPage"
import { AuthContextProvider } from "./components/auth/context";
import RegisterPage from "./components/auth/NewUser/Register";

function App({ isInitiallyLogged, history }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/login">
            <LoginPage />
          </PrivateRoute>
          <Route exact path="/adverts/new">
            <NewAdvertPage />
          </Route>
          <Route path="/adverts/:advertId">
            {routeProps => (
              <DetailAdvertPage {...routeProps} />
            )}
          </Route>
          <Route exact path="/adverts">
            <AdvertsPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/adverts" />
          </Route>
          <Route path="/404">
            <div>404 | Not Found Page</div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
