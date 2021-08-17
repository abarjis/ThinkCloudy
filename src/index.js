import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route component={Login} path="/login"/>
        <Route component={SignUp} path="/signup" />
      </Switch>
      {/* <App />*/}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
