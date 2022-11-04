import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import * as animationData from "../../delivery.json";
const PayNow = () => {
  const container = useRef(true);
  useEffect(() => {
    lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);
  return (
    <div>
      <div>Holaaa</div>
      <div className="container"></div>
    </div>
  );
};

export default PayNow;
