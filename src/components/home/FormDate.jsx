import React, { useEffect, useState }  from 'react'
import { useParams } from "react-router-dom";
import { getSinglePizza } from "../../services/user";
import { useNavigate } from "react-router-dom";
import Card from './Card';

const FormDate = () => {

  const [traerPizza, setTraerPizza] = useState({});
  const { idPizza } = useParams();

  // const navigate = useNavigate();

  // const goToDetail = () => {
  //   navigate(`/form/${pizza.id}`);
  // };

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
    <>
    <div>
      < Card />
      {/* {traerPizza ? (
          <div>
            <img src={traerPizza.image} alt="pizza" />
            <h1>{traerPizza.name}</h1>
            <p>{traerPizza.description}</p>
            <p>{traerPizza.price}</p>
          </div>
        ) : (
          "cargando ..."
        )} */}
    </div>
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

  )
}

export default FormDate;
