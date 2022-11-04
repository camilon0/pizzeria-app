import React, { useContext } from "react";
import { AppContext } from "../../routes/Router";

const Cart = ({ pizza }) => {
  const { cantidadPizza } = useContext(AppContext);
  return (
    <div key={pizza.id} className="card text-bg-dark">
      <img src={pizza.image} className="card-img" alt="Pizza" />
      <div className="card-img-overlay">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.price}</p>
      </div>
    </div>
  );
};

export default Cart;
