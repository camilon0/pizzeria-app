import React from "react";
import Lottie from "react-lottie";
import animationData from "../../src/lotties/84918-404-error-doodle-animation.json";
import "./styleNoMatch.scss";
const NoMatch = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="noMatch">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};
export default NoMatch;
// import React from "react";

// const NoMatch = () => {
//   return <div>NoMatch</div>;
// };

// export default NoMatch;
