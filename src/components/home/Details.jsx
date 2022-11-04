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
      <div className="details">
        <div className="descriptionPizza">
          {traerPizza ? (
            <div>
              <img src={traerPizza.image} alt="pizza" />
              <h2>{traerPizza.name}</h2>
              <span className="price">{traerPizza.price}$</span>
              <h6>Descripción</h6>
              <p>{traerPizza.description}</p>
            </div>
          ) : (
            "cargando ..."
          )}
        </div>
        <div className="containerPagar">
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
          <div className="priceContainer">
            {cantidadPizza * traerPizza.price}$
          </div>
          <button className="pagar" onClick={() => goToCart(traerPizza.id)}>
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
