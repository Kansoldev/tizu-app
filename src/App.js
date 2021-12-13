import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Register from "./Register";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
