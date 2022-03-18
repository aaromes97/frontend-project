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
import DetailAdvertPage from "./components/adverts/DetailPage/DetailAdvertPage";
import { AuthContextProvider } from "./components/auth/context";
import RegisterPage from "./components/auth/NewUser/Register";
import ForgotPasswordSendEmailPage from "./components/auth/ForgotPassword/SendEmailPage/SendEmailPage";
import ForgotPasswordResetPage from "./components/auth/ForgotPassword/ResetPage/ResetPage";
import PrivateRouteForgotPassword from "./components/auth/PrivateRouteForgotPassword";
import ProfilePage from "./components/auth/ProfilePage/ProfilePage";
import { Chat } from "./components/chat/Chat";

function App({ isInitiallyLogged, history }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };

  return (
    <Router>
      <AuthContextProvider value={{ isLogged, handleLogout, handleLogin }}>
        <div className="App">
          <Switch>
            <Route path="/login">
              {({ history, location }) => <LoginPage history={history} location={location} />}
            </Route>
            <Route path="/register">
              {({ history }) => <RegisterPage history={history} />}
            </Route>
            <Route exact path="/forgot-password">
              {({ history }) => <ForgotPasswordSendEmailPage history={history} />}
            </Route>
            <PrivateRouteForgotPassword exact path="/forgot-password/check">
              {({ history }) => <ForgotPasswordResetPage history={history} />}
            </PrivateRouteForgotPassword>
            <PrivateRoute exact path="/adverts/new">
              <NewAdvertPage />
            </PrivateRoute>
            <Route path="/adverts/:advertId">
              {(routeProps) => <DetailAdvertPage {...routeProps} />}
            </Route>
            <Route path="/chat">
              {(routeProps) => <Chat {...routeProps} />}
            </Route>
            <PrivateRoute path="/profile">
              {(history) => <ProfilePage {...history} />}
            </PrivateRoute>
            <Route exact path="/adverts" component={AdvertsPage} />
            <Route exact path="/">
              <Redirect to="/adverts" component={AdvertsPage} />
            </Route>
            <Route path="/404">
              <div>404 | Not Found Page</div>
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>

          {/* {isLogged ? <AdvertsPage /> : <LoginPage/>}  */}
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
