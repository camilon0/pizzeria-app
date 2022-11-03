import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePizza } from "../../services/user";
import Cart from "./Cart";

const FormDate = () => {
  const [traerPizza, setTraerPizza] = useState({});
  const { idOrden } = useParams();

  const obtenerPizza = async () => {
    const product = await getSinglePizza(idOrden);
    const pizzaSola = product[0];
    setTraerPizza(pizzaSola);

    console.log(pizzaSola);
  };

  useEffect(() => {
    obtenerPizza();
    console.log(idOrden);
  }, []);

  return (
    <>
      <div>{traerPizza ? <Cart pizza={traerPizza} /> : "..cargando"}</div>
      <form>
        <label>
          Nombre Completo
          <input type="text" />
        </label>
        <label>
          Numero de tarjeta de credito
          <input type="number" />
        </label>
        <label>
          Dirección
          <input type="text" />
        </label>
        <button>Pagar ahora</button>
      </form>
    </>
  );
};

export default FormDate;
