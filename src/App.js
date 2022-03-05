import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage/LoginPage";

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  
  
  const handleLogin = () => setIsLogged(true);

  return (
    <div className="App">
      <Router>
        {/* <Switch>
          <Route exact path="/login">
            <LoginPage />
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
        </Switch> */}

        {isLogged ? <AdvertsPage isLogged={ isLogged}/> : <LoginPage onLogin={handleLogin}/>} 

      </Router>
    </div>
  );
}

export default App;
