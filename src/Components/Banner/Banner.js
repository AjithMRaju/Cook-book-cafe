import React, { useEffect, useState } from "react";
import { openModal } from "../../Redux/UserSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import OnlineChefImage from "../../Assets/HeaderImages/1690646179648.jpg";
import chefImage from "../../Assets/HeaderImages/1690696909197.jpg";
// import CookingImage from "../../Assets/Images/cook-reading-recipe-book-character-by-Vexels.png";


import "./Banner.css";

const Banner = () => {

  
  
  const dispatch = useDispatch();
 

  const handleAcion = () => {
    dispatch(openModal());
  };

  return (
    <header className="mt-5">
      <div className="container mt-5 pt-3">
        <div className="row  align-items-center ">
          <div className="col-sm-12 col-lg-6 d-flex flex-column justify-conten-center ">
            <div className="mt-5">
              <motion.h1
              className="banner-h1 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover your inner chef <br />
              and elevate your <span className="bannerSpan">skills </span> with us.
            </motion.h1>
            <motion.p
              className="pt-3 pb-3 banner-p"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Whether you're a beginner looking to learn the basics or an
              experienced cook seeking inspiration for your next culinary
              masterpiece, <span>CookbookCafe</span> is your trusted companion
              on your gastronomic journey. Let the aromas waft through your
              kitchen as you explore, experiment, and create unforgettable
              dishes that will impress family and friends.
            </motion.p>
            <div className="mb-4">
              <motion.button
                onClick={handleAcion}
                className="signup-btn me-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Sign Up
              </motion.button>
              <motion.button
                onClick={handleAcion}
                className="loginbtn"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                LogIn
              </motion.button>
            </div>
            </div>
            
          </div>

          <motion.div
            className="col-sm-12 col-lg-6 banner-img mb-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={chefImage} alt="bannerImage" className="bannerImage" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Banner;


// backup current image link "https://cdn.dribbble.com/users/2440733/screenshots/14749857/media/f4a2c1c0768b284b03894b550a3056e6.jpg?resize=768x576&vertical=center" className="bannerImage" alt="BannerImage"