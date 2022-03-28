import React, { useContext, useEffect, useState } from "react";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import { logout } from "./components/auth/LoginPage/service";
import DetailAdvertPage from "./components/adverts/DetailPage/DetailAdvertPage";
import AuthContext, { AuthContextProvider } from "./components/auth/context";
import RegisterPage from "./components/auth/NewUser/Register";
import ForgotPasswordSendEmailPage from "./components/auth/ForgotPassword/SendEmailPage/SendEmailPage";
import ForgotPasswordResetPage from "./components/auth/ForgotPassword/ResetPage/ResetPage";
import PrivateRouteForgotPassword from "./components/auth/PrivateRouteForgotPassword";
import ProfilePage from "./components/auth/ProfilePage/ProfilePage";
import DeleteUserPage from "./components/auth/DeleteUserPage/DeleteUserPage";
import Chat from "./chat/chat/chat";

import io from "socket.io-client";
import MessagePage from "./components/MessagePage/Messages";

const socket = io.connect("/");

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
    </React.Fragment>
  );
}

function App({ isInitiallyLogged, history }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const [adverts, setAdverts] = useState('')

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };

  return (

    <Suspense fallback={null}>

      <Router>

        <AuthContextProvider value={{ isLogged, handleLogout, handleLogin, adverts }}>

          <div className="App" >

            <Switch>
              <Route path="/login">
                {({ history, location }) => (
                  <LoginPage history={history} location={location} />
                )}
              </Route>
              <Route path="/register">
                {({ history }) => <RegisterPage history={history} />}
              </Route>
              <Route exact path="/forgot-password">
                {({ history }) => (
                  <ForgotPasswordSendEmailPage history={history} />
                )}
              </Route>
              <PrivateRouteForgotPassword exact path="/forgot-password/check">
                {({ history }) => <ForgotPasswordResetPage history={history} />}
              </PrivateRouteForgotPassword>
              <PrivateRoute exact path="/adverts/new">
                <NewAdvertPage />
              </PrivateRoute>
              <PrivateRoute exact path="/messages">
                <MessagePage />
              </PrivateRoute>
              <Route path="/adverts/:advertId">
                {(routeProps) => (
                  <DetailAdvertPage {...routeProps} socket={socket} />
                )}
              </Route>
              <Route path="/chat/:roomname/:username" component={Appmain} />
              <PrivateRoute path="/profile">
                {(history) => <ProfilePage {...history} />}
              </PrivateRoute>
              <PrivateRoute path="/deleteUser">
                {(history) => <DeleteUserPage {...history} />}
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

    </Suspense>

  );
}

export default App;
