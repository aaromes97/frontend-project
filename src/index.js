import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client, { setAuthorizationHeader } from './api/client';
import storage from './utils/storage';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next
  .init({
    lng:'es',
    fallbackLng: 'es',
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    cookie: 'nodeapi-locale',
     defaultLocale: 'en',
    autoReload: true,
    syncFiles: true,
  // interpolation: { escapeValue: false },
  // lng:'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

const accessToken = storage.get('auth');
setAuthorizationHeader(accessToken)

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App isInitiallyLogged = {!!accessToken} />

    </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

