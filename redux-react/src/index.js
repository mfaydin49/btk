import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import configureStore from "./redux/reducers/ConfigureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
