import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePizza } from "../../services/user";

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
  return (
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
  );
};

export default Details;
