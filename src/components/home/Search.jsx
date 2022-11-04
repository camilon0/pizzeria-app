import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { filterPizzas } from "../../services/user";
import "./style.scss";
import { useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

const Search = () => {
  const [pizzas, setPizzas] = useState([]);
  const [search, setSearch] = useState("");
  //pone el search inicial sin pizzas
  const [showFilter, setShowFilter] = useState(false);

  const fetchPizzas = async () => {
    const product = await filterPizzas();

    setPizzas(product);
    console.log(product);
  };
  useEffect(() => {
    fetchPizzas();
  }, []);
  //le damos el valos setShowFilter true aceptando poner el estado inicial en blanco
  const handleChange = (e) => {
    setSearch(e.target.value);
    setShowFilter(true);
  };

  const filtrar = !search
    ? pizzas
    : pizzas.filter((results) =>
        results.name.toString().toLowerCase().includes(search.toLowerCase())
      );

  return (
    <main className="main">
      <div className="home">
        <Header />

        <input
          type="text"
          value={search}
          className="form-control input"
          placeholder="Pizza para programadores, react, Khan Academy"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <button className="btn btn-success">Buscar</button>
        <section className="container">
          {/* Le pasamos la accion del estado mas la funcion .map de pizzas */}
          {showFilter &&
            filtrar.map((item) => {
              return <Card key={item.id} pizza={item} />;
            })}
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Search;
