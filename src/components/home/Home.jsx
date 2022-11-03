import React, { useContext } from "react";
import { AppContext } from "../../routes/Router";
import { useEffect } from "react";
import { getPizzas } from "../../services/user";
import "./style.scss";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from "./Card";

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
        return <Card key={item.id} pizza={item} />;
      })}
    </div>
  );
};

export default Home;
