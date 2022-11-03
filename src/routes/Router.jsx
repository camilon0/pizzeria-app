import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Login from "../components/loginAndRegister/Login";
import Home from "../components/home/Home";
import Details from "../components/home/Details";
import Card from "../components/home/Card";
import Search from "../components/home/Search";
import Register from "../components/loginAndRegister/Register";
import Success from "../components/home/Success";
import NoMatch from "../components/NoMatch";
import FormDate from "../components/home/FormDate";

export const AppContext = createContext({});

const Router = () => {
  const [usuario, setUsuario] = useState({});
  const [pizza, setPizza] = useState([]);

  return (
    <AppContext.Provider
      value={{
        usuario,
        setUsuario,
        pizza,
        setPizza,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:idPizza" element={<Details />} />
          <Route path="form" element={<FormDate />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<Card />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
