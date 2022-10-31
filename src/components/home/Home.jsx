import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
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
  );
};

export default Home;
