import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePizza } from "../../services/user";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [traerPizza, setTraerPizza] = useState({});
  const { idPizza } = useParams();

  const obtenerPizza = async () => {
    const product = await getSinglePizza(idPizza);
    const pizzaSola = product[0];
    setTraerPizza(pizzaSola);

    console.log(pizzaSola);
  };

  useEffect(() => {
    obtenerPizza();
    console.log(traerPizza);
  }, []);

  const [quantity, setQuantity] = useState(1)

  const handleClick = (operation) => {
    if (operation === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity - 1)
    }
  }

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/form');
  };

  return (
    <>
      <div>
        {traerPizza ? (
          <div>
            <img src={traerPizza.image} alt="pizza" />
            <h1>{traerPizza.name}</h1>
            <p>{traerPizza.description}</p>
            <p>{traerPizza.price}</p>
          </div>
        ) : (
          "cargando ..."
        )}
      </div>
      <div className="counter">
        <button disabled={quantity <= 1} onClick={() => { handleClick('minus') }}>-</button>
        <span>{quantity}</span>
        <button onClick={() => { handleClick('plus') }}>+</button>
      </div>
        <div>{quantity * traerPizza.price}</div>
      <button onClick={goToDetail}>Pagar</button>
    </>
  );
};

export default Details;
