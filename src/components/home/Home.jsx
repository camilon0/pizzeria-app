import React, { useContext, useState } from "react";
import { AppContext } from "../../routes/Router";
import { useEffect } from "react";
import { getPizzas, protectedRoute } from "../../services/user";
import "./style.scss";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  const { pizza, setPizza } = useContext(AppContext);

  const [reload, setReload] = useState(false); //aqui

  const navigate = useNavigate(); //aqui

  const handleCloseSession = () => {
    //aqui
    sessionStorage.clear();
    setReload(!reload);
  };

  const fetchPizzas = async () => {
    const product = await getPizzas();
    setPizza(product);
  };

  useEffect(() => {
    fetchPizzas();
    protectedRoute(navigate); //aqui
  }, [reload]);

  return (
    <main className="main">
      <div className="home">
        <Header />
        <div className="disponibles">
          <span>Pizzas disponibles</span>
          <Link to="/search">
            <button>Search</button>
          </Link>
        </div>
        <section className="container">
          {pizza.map((item, index) => {
            return <Card key={item.id} pizza={item} />;
          })}
        </section>
      </div>
      <Footer handleCloseSession={handleCloseSession} />
    </main>
  );
};

export default Home;
