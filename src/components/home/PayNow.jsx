import React from "react";

import Lottie from "react-lottie";
import animationData from "../../lotties/50465-done.json";
import { Link } from "react-router-dom";
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
    <div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <h2>Tu pedido está en proceso</h2>
      <p>Serás noticado cuando legue el repartidor</p>
      <Link to={"/home"}>
        <button>Aceptar</button>
      </Link>
    </div>
  );
};
export default PayNow;
