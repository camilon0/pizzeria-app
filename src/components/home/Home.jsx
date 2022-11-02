import React, { useContext } from "react";
import { AppContext } from "../../routes/Router";
import { useEffect } from "react";
import { getPizzas } from "../../services/user";

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
    <div>
      {pizza.map((item, index) => {
        return (
          <span key={index}>
            <img src={item.image} alt="pizzas" />
            <p>{item.name}</p>
          </span>
        );
      })}
    </div>
  );
};

export default Home;
