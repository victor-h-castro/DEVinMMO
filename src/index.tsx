/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import App from 'App';
import { SettingsProvider } from 'context/SettingContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>

        <App />
      </BrowserRouter>

    </SettingsProvider>

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
