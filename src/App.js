import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSuccess from "./components/LoginSuccessfull/LoginSuccess";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/register">
          <Route index element={<Register />} />
        </Route>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
        <Route path="/login-success">
          <Route index element={<LoginSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
