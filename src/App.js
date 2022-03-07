import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import { logout } from "./components/auth/LoginPage/service";
import { AuthContextProvider } from "./components/auth/context";
import RegisterPage from "./components/auth/NewUser/Register";




function App({isInitiallyLogged, history}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  
  
  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
    
  };

  return (
  <Router>
    <AuthContextProvider value={{isLogged, handleLogout, handleLogin}}>

    <div className="App" >
          <Switch>
            <Route path="/login">
              {({history}) => <LoginPage history={history}/>}
          </Route>
          <Route path="/register">
            {({ history }) => <RegisterPage history={history} />}
          </Route>
          {/* <Route path="/adverts/:advertId" component={AdvertPage} /> */}
          {/* <Route exact path="/adverts/new" component={NewAdvertPage} /> */}
          <Route exact path="/adverts" component={AdvertsPage}/>
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
