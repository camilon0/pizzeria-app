import React from "react";

import Lottie from "react-lottie";
import animationData from "../../lotties/50465-done.json";
import { Link } from "react-router-dom";
import "./style.scss";
const PayNow = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="main">
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <div className="tituloAnimacion">
        <h2>Tu pedido está en proceso</h2>
        <p>Serás noticado cuando legue el repartidor</p>
        <Link to={"/home"}>
          <button className="aceptarAnimacion">Aceptar</button>
        </Link>
      </div>
    </main>
  );
};
export default PayNow;
