import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import configureStore, { history } from "./store";
import "./firebase/firebase";
// import App from './containers/App';
import App from "./containers/index";

export const store = configureStore();

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default MainApp;
