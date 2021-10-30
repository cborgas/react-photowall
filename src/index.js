import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { postReducer } from "./redux/reducer";
import App from "./Components/App";

const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
