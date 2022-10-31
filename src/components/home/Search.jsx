import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap";
import "./style.scss";

const Search = () => {
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
          className="form-control input"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>
    </>
  );
};

export default Search;
