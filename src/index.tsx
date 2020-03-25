import * as React from "react";
import * as ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from './redux/store';

import LoginExample from "LoginExample";

ReactDom.render(
  <Provider store={store}>
    <LoginExample />
  </Provider>,
  document.getElementById("example")
);
