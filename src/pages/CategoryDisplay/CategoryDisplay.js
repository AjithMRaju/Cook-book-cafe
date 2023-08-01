import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setResultDish } from "../../Redux/UserSlice";
import CellTowerIcon from "@mui/icons-material/CellTower";
import Menu from "../Menu/Menu";
import Loading from "../Loading/Loading";
import axiosinstance from "../../Docs/AxiosConfic";
// import SampleNextArrow from "../SlickButtons/SlickButtons";
import Slider from "react-slick";
// css file..
import "./CategoryDisplay.css";
// slick css file.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CategoryDisplay = ({
  fetchUrl,
  filterFood,
  initialDish,
  area,
  
}) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [activeClass, setActiveClass] = useState(initialDish);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  // fetching data funstions  ...
  const getCategory = async () => {
    try {
      const response = await axiosinstance.get(fetchUrl);
      setCategory(response.data.meals);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  // function for setting an active class and fetching CategoryData with onClick ...
  const shoewCategoryuDish = async (dishName, index) => {
    setActiveIndex(index);
    // setActiveClass(dishName);
    try {
      const response = await axiosinstance.get(`${filterFood}${dishName}`);
      setDishes(response.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // showing some random food data inthe intitial page loading....
  const defualtData = async (dishName) => {
    setActiveClass(dishName);
    try {
      const response = await axiosinstance.get(`${filterFood}${dishName}`);
      setDishes(response.data.meals);
      dispatch(setResultDish(response.data.meals));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCategory();
    defualtData(activeClass);

    // rendering Loading componrnt with condition..
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 1000); // Simulating a 3-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="CategoryDisplay mt-5 mb-5">      
      <Container className="mt-2  text-center">
        <div className="meal-categories pt-5">
          <Slider {...settings}>
            {category.map((category, index) => (
              <button
                className={`${activeIndex === index ?  "active " : ""} category-Button`}
                key={index}               
                onClick={() => {
                  !area
                    ? shoewCategoryuDish(category?.strCategory, index)
                    : shoewCategoryuDish(category?.strArea, index);
                }}
              >
                {!area ? category?.strCategory : category?.strArea}
              </button>
            ))}
          </Slider>
        </div>

        {isLoading ? (
          <Loading />
        ) : dishes.length !== 0 ? (
          <Menu dishes={dishes} isSaved={false} />
        ) : (
          <p className="text-danger mt-4">
            <CellTowerIcon
              style={{
                fontSize: "22px",
              }}
            />
            <span>Check Your Internet Connection !!..</span>
          </p>
        )}
      </Container>
    </section>
  );
};

export default CategoryDisplay;

// backup
{
  /* <div className="meal-categories">
{category.map((category, index) => (
  <motion.button
    className={activeIndex === index ? "active " : ""}
    key={index}
    initial={{
      opacity: 0,
      scale: 0,
    }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    onClick={() => {
      !area
        ? shoewCategoryuDish(category?.strCategory, index)
        : shoewCategoryuDish(category?.strArea, index);
    }}
  >
    {!area ? category?.strCategory : category?.strArea}
  </motion.button>
))}
</div> */
}
