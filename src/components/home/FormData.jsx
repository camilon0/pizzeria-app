import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getSinglePizza } from "../../services/user";
import Cart from "./Cart";
import { createBuy } from "../../services/user";
import { AppContext } from "../../routes/Router";
import "./style.scss";

const FormDate = () => {
  const { cantidadPizza } = useContext(AppContext);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const buyCreate = async (buy) => {
    //if (user.length !== "" && password.length !== "" && name.length !== "") {
    const response = await createBuy(buy);
    if (response?.id) {
      navigate("/pay");
    }
  };

  return (
    <main className="main">
      <div className="cardCart">
        {traerPizza ? <Cart pizza={traerPizza} /> : "..cargando"}
      </div>
      <form className="formCart" onSubmit={handleSubmit(buyCreate)}>
        <span>Información de pago</span>
        <label>
          Nombre Completo
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("name", { required: true })}
          />
          {errors.name && <span>el nombre es obligatorio</span>}
        </label>
        <label>
          Numero de tarjeta de credito
          <input
            type="number"
            placeholder="1234 1234 1234 1234"
            {...register("card", { required: true })}
          />
          {errors.card && <span>el numero de tarjeta es obligatorio</span>}
        </label>
        <label>
          Dirección
          <input
            type="text"
            placeholder="Av. morelos #123"
            {...register("direction", { required: true })}
          />
          {errors.direction && <span>la dirección es obligatoria</span>}
        </label>
        <label>
          Cantidad:
          <input
            type="text"
            value={cantidadPizza}
            placeholder={cantidadPizza}
            {...register("quantity")}
            readOnly
          />
        </label>
        <label>
          Precio:
          <input
            type="text"
            value={cantidadPizza * traerPizza.price}
            placeholder={cantidadPizza * traerPizza.price}
            {...register("price")}
            readOnly
          />
        </label>

        <button type="submit">Pagar ahora</button>
      </form>
    </main>
  );
};

export default FormDate;
