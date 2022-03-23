import React, { useContext, useEffect, useState } from "react";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import { logout } from "./components/auth/LoginPage/service";
import AuthContext, { AuthContextProvider } from "./components/auth/context";
import RegisterPage from "./components/auth/NewUser/Register";






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
              {({ history }) => <LoginPage history={history} />}
            </Route>
            <Route path="/register">
              {({ history }) => <RegisterPage history={history} />}
            </Route>
            {/* <Route path="/adverts/:advertId" component={AdvertPage} /> */}
            {/* <Route exact path="/adverts/new" component={NewAdvertPage} /> */}
            <Route exact path="/adverts" component={AdvertsPage} />
            <Route exact path="/">
              <Redirect to="/adverts" component={AdvertsPage} />
            </Route>
            <Route exact path="/adverts/new">
              <NewAdvertPage />
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
