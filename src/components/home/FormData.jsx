import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getSinglePizza } from "../../services/user";
import Cart from "./Cart";
import { createBuy } from "../../services/user";
import swal from "sweetalert";
import { AppContext } from "../../routes/Router";

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
      swal("Excelente!", "compra éxitosa!", "success");
      navigate("/home");
    }
  };

  return (
    <>
      <div>{traerPizza ? <Cart pizza={traerPizza} /> : "..cargando"}</div>
      <form onSubmit={handleSubmit(buyCreate)}>
        <label>
          Nombre Completo
          <input 
          type="text" 
          {...register("name", { required: true })}/>
          {errors.name && <span>el nombre es obligatorio</span>}
        </label>
        <label>
          Numero de tarjeta de credito
          <input 
          type="number" 
          {...register("card", { required: true })}/>
          {errors.card && <span>el numero de tarjeta es obligatorio</span>}
        </label>
        <label>
          Dirección
          <input 
          type="text" 
          {...register("direction", { required: true })}/>
          {errors.direction && <span>la dirección es obligatoria</span>}
        </label>
        <label>
          Cantidad: 
          <input type="text" 
          value={cantidadPizza}
          placeholder={cantidadPizza} 
          {...register("quantity")}
          readOnly/>
        </label>
        <label>
          Precio: 
          <input type="text" 
          value={cantidadPizza * traerPizza.price} 
          placeholder={cantidadPizza * traerPizza.price} 
          {...register("price")}
          readOnly/>
        </label>
        <button type="submit">Pagar ahora</button>
      </form>
    </>
  );
};

export default FormDate;
