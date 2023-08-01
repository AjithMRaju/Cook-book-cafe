import React, { Fragment } from "react";
import "./FoodCard.css";

const FoodCard = ({ lists }) => {
  const foodCardender = () => {
    if (lists.ingredient && lists?.measurement !== "") {
      return (
        <div className="cards">
          <img
            src={`https://www.themealdb.com/images/ingredients/${lists?.ingredient}.png`}
            alt={lists?.ingredient}
            className="cards-img"
          />
          <h4 className="text-center">{lists?.measurement}</h4>
          <h5 className="text-center">{lists?.ingredient}</h5>
        </div>
      );
    }
  };

  return <Fragment>{foodCardender()}</Fragment>;
};

export default FoodCard;
