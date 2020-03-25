import * as React from "react";
import * as ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from './redux/store';

import Login from "./components/Login";

ReactDom.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("example")
);
