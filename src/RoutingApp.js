import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { useDispatch } from "react-redux";
import { login, logout } from "./Redux/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Docs/Firbase";

// COMPONENTS..
import Home from "./Components/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import FoodCuntry from "./pages/FoodCountry/FoodCuntry";
import SearchMeals from "./pages/Search/SearchMeals";
import NavBar from "./Components/NavBar/Navbar";
import SavedDishes from "./pages/SavedDishes/SavedDishes";

const RoutingApp = () => {
  const dispatch = useDispatch();
  // const user=useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/ingredients/:idMeal" element={<Ingredients />} />
          <Route path="/country/:urlParams" element={<FoodCuntry />} />
          <Route path="/searchMeals" element={<SearchMeals />} />
          <Route path="/collctions" element={<SavedDishes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingApp;

