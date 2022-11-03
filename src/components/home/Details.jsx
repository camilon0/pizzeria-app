import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../routes/Router";

import { getSinglePizza } from "../../services/user";

const Details = () => {
  const { cantidadPizza, setCantidadPizza } = useContext(AppContext);
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

  const handleClick = (operation) => {
    if (operation === "plus") {
      const incremento = cantidadPizza + 1;

      setCantidadPizza(incremento);
    } else {
      const decremento = cantidadPizza - 1;
      setCantidadPizza(decremento);
    }
  };
  const navigate = useNavigate();

  const goToCart = (id) => {
    navigate(`/form/${id}`);
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
        <button
          disabled={cantidadPizza <= 1}
          onClick={() => {
            handleClick("minus");
          }}
        >
          -
        </button>
        <span>{cantidadPizza}</span>
        <button
          onClick={() => {
            handleClick("plus");
          }}
        >
          +
        </button>
      </div>
      <div>{cantidadPizza * traerPizza.price}</div>
      <button onClick={() => goToCart(traerPizza.id)}>Pagar</button>
    </>
  );
};

export default Details;
