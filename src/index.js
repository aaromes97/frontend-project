import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setAuthorizationHeader } from './api/client';
import storage from './utils/storage';
import rootReducers from "./store/reducer/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./utils/i18n";



const accessToken = storage.get('auth');
setAuthorizationHeader(accessToken)

const store = createStore(rootReducers);

ReactDOM.render(

  <Provider store={store}>
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App isInitiallyLogged = {!!accessToken} />

    </I18nextProvider>
    </React.StrictMode>,
  </Provider>,
    
    
    document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

