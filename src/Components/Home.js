import React from "react";
import Banner from "./Banner/Banner";
import CategoryDisplay from "../pages/CategoryDisplay/CategoryDisplay";
import SpecialArea from "../pages/SpecialArea/SpecialArea";
import Footer from "./Footer/Footer";
import SearchMeals from "../pages/Search/SearchMeals";
import Topfoods from "../pages/TopFood/Topfoods";
import Faq from "../pages/FAQ/Faq";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserSlice";
import { URLS } from "../Docs/AxiosConfic";
import { categoryItems } from "../Docs/Functions";



// ASSETS//
// import { content } from "../Docs/Functions";

const Home = () => {
  // const title = "Choose your dishes";
  const userAuthInfo = useSelector(selectUser);


  return (
    <div className="home">
      {!userAuthInfo?.uid && <Banner />}
      <SearchMeals />
      <Topfoods />
      <CategoryDisplay
        fetchUrl={URLS.fetchAllCategory}
        filterFood={URLS.filterbyCategory}
        initialDish={"Beef"}
        // title={title}
        // content={content}
      />
      <SpecialArea categoryItems={categoryItems} />
      <CategoryDisplay
        fetchUrl={URLS.fecthAllArea}
        filterFood={URLS.filterbyArea}
        initialDish={"American"}
        area       
      />
      <Faq />
      <Footer />
     
    </div>
  );
};

export default Home;
