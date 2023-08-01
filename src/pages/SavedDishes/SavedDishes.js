import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  selectUser,
  openModal,
  selectCollectionDish,
} from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { content, getDish } from "../../Docs/Functions"; //improrted form fucntion page..
import { URLS } from "../../Docs/AxiosConfic";
import CategoryDisplay from "../CategoryDisplay/CategoryDisplay";
import Menu from "../Menu/Menu";

import "./SavedDishes.css";

const ICON_IMage =
  "https://cdn2.iconfinder.com/data/icons/food-restaurant-1/128/flat-11-512.png";

const SavedDishes = () => {
  const dishes = useSelector(selectCollectionDish);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [renderin, setRendering] = useState(false);

  const handleModal = () => {
    dispatch(openModal());
  };



  useEffect(() => {
    if (user) {
      getDish(dispatch, user?.uid);
    }
    setRendering(true);
  }, [renderin]);



  // dissplaying food items.if array length is 0 displaying some random foods to user to add collections ,
  // if array exist that means some food is exist in saved dishes ,getting the item from firbase usign getDish function and render it with Menu component..
  const displayDishes = () => {
    if (dishes.length === 0) {
      console.log("something");
      return (
        <Container>
          <CategoryDisplay
            fetchUrl={URLS.fecthAllArea}
            filterFood={URLS.filterbyArea}
            initialDish={"American"}
            area
            title={"Add some random dishes to your collection's"}
            // content={content}
          />
        </Container>
      );
    } else {
      console.log("something anything");
      return <Menu dishes={dishes} isSaved />;
    }
  };


  
  return (
    <section>
      <Container className="pt-5 mb-5 text-center d-flex flex-column justify-content-center align-items-center">
        {user?.email ? (
          displayDishes()
        ) : (
          <div className="mt-5 info-wraper d-flex flex-column justify-content-center align-items-center">
            <div className="title-icon">
              <img src={ICON_IMage} alt="iconimage" />
              <p>Dish Diaries</p>
            </div>
            <div>
              <h1>
                Signup your account ,<br />
                Add your favorite dishes
              </h1>
            </div>
            <div className="mt-4">
              <button onClick={handleModal} className="loginbtn me-2">
                Login
              </button>
              <button onClick={handleModal} className="signup-btn">
                SignUp
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SavedDishes;
