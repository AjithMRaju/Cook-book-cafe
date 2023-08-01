import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Redux/UserSlice";
import { addToSaved, removeSavedDish } from "../../../Docs/Functions"; // THIS IS FIRBASE COLUDE STORAGE FUNCTION IMPORTED FROM FUNCTION PAGE..
import { motion } from "framer-motion";
import TurnedInNotSharpIcon from "@mui/icons-material/TurnedInNotSharp";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

import "./BoxCard.css";

const BoxCard = ({ strMealThumb, idMeal, strMeal, id, isSaved }) => {
  const userAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  const functionIcons = (id) => {
    if (isSaved === true) {
      return (
        <span>
          <BookmarkOutlinedIcon
            onClick={() => {
              removeSavedDish(id, strMeal, dispatch, userAuth);
            }}
          />
        </span>
      );
    } else {
      return (
        <span>
          <TurnedInNotSharpIcon
            onClick={() => {
              addToSaved(idMeal, strMeal, strMealThumb, userAuth, dispatch);
            }}
          />
        </span>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid-item"
    >
      <img src={strMealThumb} className="main-img" alt={idMeal} />
      <div className="gradiant"></div>
      <div className="span-hover-icons">{functionIcons(id)}</div>
      <div className="overlay">
        <NavLink to={`/ingredients/${idMeal}`}>
          <p className="mb-0 moving-text">{strMeal}</p>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default BoxCard;
