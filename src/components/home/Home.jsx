import React, { useContext } from "react";
import { AppContext } from "../../routes/Router";
import { useEffect } from "react";
import { getPizzas } from "../../services/user";
import "./style.scss";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
  const { pizza, setPizza } = useContext(AppContext);
  const fetchPizzas = async () => {
    const product = await getPizzas();
    setPizza(product);
  };
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="disponibles">
        <span>Pizzas disponibles</span>
        <button>Ver todas</button>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
      {pizza.map((item, index) => {
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
  );
};

export default Home;
