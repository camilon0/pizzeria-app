import React, { useContext } from "react";
import { AppContext } from "../../routes/Router";
import { useEffect } from "react";
import { getPizzas } from "../../services/user";
import "./style.scss";
import Header from "./Header";

const Home = () => {
  const { setPizza, pizza } = useContext(AppContext);
  const traerPizzas = async () => {
    const Y = await getPizzas();
    setPizza(Y);
    console.log(pizza);
  };
  useEffect(() => {
    traerPizzas();
  }, []);
  console.log(pizza);

  return (
    
    <div className="home">
    <Header />
      <div className="disponibles">
        <span>Pizzas disponibles</span>
        <button>Ver todas</button>
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
