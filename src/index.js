import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { Provider } from "react-redux/es";
import { ToastContainer } from 'react-toastify';
import configureStore from "./Redux/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore}>
    <App />
    <ToastContainer/>
  </Provider>
);
