import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/loginAndRegister/Login";
import Home from "../components/home/Home";
import Details from "../components/home/Details";
import Card from "../components/home/Card";
import Cart from "../components/home/Cart";
import Search from "../components/home/Search";
import Register from "../components/loginAndRegister/Register";
import Success from "../components/home/Success";
import NoMatch from "../components/NoMatch";
import FormData from "../components/home/FormData";

export const AppContext = createContext({});

const Router = () => {
  const [usuario, setUsuario] = useState({});
  const [cantidadPizza, setCantidadPizza] = useState(1);
  const [pizza, setPizza] = useState([]);

  return (
    <AppContext.Provider
      value={{
        usuario,
        setUsuario,
        pizza,
        setPizza,
        cantidadPizza,
        setCantidadPizza,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:idPizza" element={<Details />} />
          <Route path="/form/:idOrden" element={<FormData />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
