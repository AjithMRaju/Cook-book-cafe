import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, openModal } from "../../Redux/UserSlice";
import { motion } from "framer-motion";
import axiosinstance from "../../Docs/AxiosConfic";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FoodCard from "../Cards/FoodProductCard/FoodCard";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "./Ingredients.css";

const Ingredients = () => {
  const userAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState([]);
  const [mealdata, setMealdata] = useState([]);
  const [isTrancate, setIsTrancate] = useState(true);
  const maxLength = 500; // this 500 value is  instrunction maximum length..

  // background styling objects
  const getIngredients = async () => {
    try {
      const response = await axiosinstance.get(`lookup.php?i=${idMeal}`);
      const meal = response.data.meals[0];
      setMealdata(response.data.meals[0]);
      console.log(response.data.meals[0]);

      // Extrack ingrediant names and measurements..
      const ingrediantsKey = Object.keys(meal).filter((key) =>
        key.includes("strIngredient")
      );
      const measuremntKey = Object.keys(meal).filter((key) =>
        key.includes("strMeasure")
      );

      // Create an array of ingrediant objects...
      const mealIngrediants = ingrediantsKey.map((ingredientKey, index) => ({
        ingredient: meal[ingredientKey],
        measurement: meal[measuremntKey[index]],
      }));

      setMealDetails(mealIngrediants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // handling isTrancate state for readMore readLess functonality..
  const handleTrancate = () => {
    setIsTrancate(!isTrancate);
  };

  // rendering strInstructions function...
  const dishInstructon = () => {
    if (isTrancate) {
      return (
        <>
          <p className="mt-2 mb-0 ps-3 pt-3 pe-3 pb-0 text-start">
            {strInstructions?.slice(0, maxLength)}...{" "}
          </p>
          <button className="ms-3 mt-2 read-btn" onClick={handleTrancate}>
            Read More
          </button>
        </>
      );
    } else {
      return (
        <>
          <p className="mt-2 mb-0 ps-3 pt-3 pe-3 pb-0  text-start">
            {strInstructions}
          </p>
          <button className="ms-3 mt-2 read-btn" onClick={handleTrancate}>
            Read less
          </button>
        </>
      );
    }
  };

  // watch video function..
  const handleYouTube = () => {
    if (userAuth?.uid || userAuth?.email) {
      window.location.href = strYoutube;
    } else {
      dispatch(openModal());
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const {
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
    strYoutube,
  } = mealdata;

  return (
    <section
      style={{
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Container className="pt-5">
        <Row className="pt-5 position-relative">
          <Col xs={12} md={12} lg={6} className="mb-2">
            <img src={strMealThumb} className="ingrediant-img" alt={strMeal} />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="dish-info text-white text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center p-5">
              <div>
                <h2>{strMeal}</h2>
              </div>
              <h3 className="mb-0 locationIcon text-start">
                  <LocationOnIcon  />
                  {strArea}
              </h3>

                <h3 className=" tags m-0 text-start ">
                  <DinnerDiningIcon/>
                  {strCategory}
                </h3>

              <div className="sources mt-3">
                {/* <span className="author me-2">
                  <MenuBookSharpIcon />
                </span> */}
                <button className="watch-video" onClick={handleYouTube}>
                  <PlayArrowIcon />
                  Watch video
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 text-center br-line pb-5 ">
        <div className="instuction ms-auto me-auto">Instructon</div>
        {dishInstructon()}
      </Container>

      <Container className="pt-5 ">
        <div className="instuction ms-auto me-auto text-center mb-5">
          Ingrediants
        </div>
        <Row>
          {mealDetails.map((lists, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={index}
              className=" mb-4 col-sm-4 col-xs-3 col-lg-2"
              xs={6}
            >
              <FoodCard lists={lists} />
            </motion.div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Ingredients;
