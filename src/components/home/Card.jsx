import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pizza }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/details/${pizza.id}`);
  };

  return (
    <div onClick={goToDetail} key={pizza.id} className="card text-bg-dark">
      <img src={pizza.image} className="card-img" alt="Pizza" />
      <div className="card-img-overlay">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.price}</p>
      </div>
    </div>
  );
};

export default Card;
