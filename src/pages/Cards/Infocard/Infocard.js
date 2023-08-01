import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { content, addToSaved } from "../../../Docs/Functions";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Redux/UserSlice";
import "./Infocard.css";

const Infocard = ({ idMeal, strMealThumb, strMeal, index }) => {
  const userAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <motion.div
      className="infcard mt-5 text-center"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="img-wraper">
        <img src={strMealThumb} alt="product-image" />
      </div>
      <div className="mt-5 pt-5  p-3">
        <h4 className="pt-5 ">{strMeal}</h4>
        <p className="content pt-4 text-start">{content}</p>
        <Link to={`/ingredients/${idMeal}`}>
          <button className="expolre-btn mb-4 ">View</button>
        </Link>
        <button
          className=" saveBtn mb-4 "
          onClick={() => {
            addToSaved(idMeal, strMeal, strMealThumb, userAuth, dispatch);
          }}
        >
          Save
        </button>
      </div>
    </motion.div>
  );
};

export default Infocard;
