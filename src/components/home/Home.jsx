import React, { useContext, useState }from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../routes/Router";
import { getPizzas } from "../../services/user";
const Home = () => {

  const {pizza, setPizza, usuario } = useContext(AppContext);

  const [allPizzas, setAllPizzas] = useState({});

  const getPoducts = async () => {
    const product = await getPizzas()
    console.log(product);
    //setAllPizzas(...product)
  }
  getPoducts();

  return (
    <div>
      <Link to="/search">
        <button>Search</button>
      </Link>
      <Link to="/cart">
        <button>Carrito</button>
      </Link>
      <Link to="/details">
        <button>detalles</button>
      </Link>
      <h1>
        {Object.entries(usuario).length === 0
          ? "App Context"
          : `Hola!! ${usuario.name}`}
      </h1>
      <ul>
        {/* {
          allPizzas.map((item, index) =>(
            <li key={index}>{item.name}</li>
          ))
        } */}
      </ul>
    </div>
  );
};

export default Home;
