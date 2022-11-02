import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { filterPizzas } from "../../services/user";
//import "bootstrap/dist/js/bootstrap";
import "./style.scss";
import { useEffect } from "react";

const Search = () => {
  const [pizzas, setPizzas] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPizzas = async () => {
    const product = await filterPizzas();

    setPizzas(product);
    console.log(product);
  };
  useEffect(() => {
    fetchPizzas();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtrar = ! search ? pizzas : pizzas.filter((results) => results.name.toString().toLowerCase().includes(search.toLowerCase()))

  // const filter = (word) => {
  //   const searchFilter = pizzas.filter((results) => {
  //     if (results.name.toString().toLowerCase().includes(word.toLowerCase())) {
  //       return results;
  //     }
  //   });
  //   setPizzas(searchFilter);
  //   console.log(searchFilter);
  // };

  return (
    <>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/search">
          <button>Search</button>
        </Link>
        <Link to="/cart">
          <button>Carrito</button>
        </Link>
        <Link to="/details">
          <button>detalles</button>
        </Link>
      </div>
      <div className="input-group mb-3">
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
        <div>
          {filtrar.map((item, index) => {
            return (
              <div key={index} className="card text-bg-dark">
                <img src={item.image} className="card-img" alt="Pizza" />
                <div className="card-img-overlay">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
