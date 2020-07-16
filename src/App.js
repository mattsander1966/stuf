import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import StufComponent from "./Components/StufComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/stufbid" />
          <Route path="/stufhome" component={StufComponent} />
          <Redirect to="/stufhome" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
