// import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import api from "./API/api";
import "./App.css";
import Crousal from "./components/Crousal";
import Home from "./components/Home";
import Login from "./components/Login";
import Overview from "./components/Overview";

function App() {
  // const apiContext = createContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crousal" element={<Crousal />} />
        <Route path="/overview/:type/:id" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
