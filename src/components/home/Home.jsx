import React, { useContext, useState } from "react";
import { AppContext } from "../../routes/Router";
import { useEffect } from "react";
import { getPizzas, protectedRoute } from "../../services/user";
import "./style.scss";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const { pizza, setPizza } = useContext(AppContext);

  const [reload, setReload] = useState(false) //aqui

  const navigate = useNavigate(); //aqui

  const handleCloseSession = () => { //aqui
    sessionStorage.clear();
    setReload(!reload)
  }

  const fetchPizzas = async () => {
    const product = await getPizzas();
    setPizza(product);
  };

  useEffect(() => {
    fetchPizzas();
    protectedRoute(navigate) //aqui
  }, [reload]);

  return (
    <div className="home">
      <Header handleCloseSession={handleCloseSession}/> 
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
