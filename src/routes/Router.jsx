import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/loginAndRegister/Login";
import Home from "../components/home/Home";
import Details from "../components/home/Details";
import Cart from "../components/home/Cart";
import Search from "../components/home/Search";
import Register from "../components/loginAndRegister/Register";
import Success from "../components/home/Success";
import NoMatch from "../components/NoMatch";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details />} />

        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
