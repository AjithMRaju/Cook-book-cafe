import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import BoxCard from "../Cards/BoxCard/BoxCard";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import "./menu.css";

const Menu = ({ dishes, isSaved }) => {
  console.log("dishes",dishes)
  const length = dishes.length;
  const maxNumber = 6;
  const [loadMore, setLoadMore] = useState(maxNumber);
  const [activeLoadmore, setActiveLoadmore] = useState(false);

  // displaying more item fucntion..
  const handleLoadMore = () => {
    if (length !== slicedDishes.length) {
      setLoadMore(loadMore + maxNumber);
      setActiveLoadmore(true);
    }
  };

  // dish hiding function..
  const hideDish = () => {
    if (slicedDishes.length === maxNumber) {
      console.log(true);
    } else {
      setLoadMore(loadMore - maxNumber);
    }
  };

  // slicing fucntio for loadMore button....
  const slicedDishes = dishes?.slice(0, loadMore);

  return (
    <Container className="pt-5 pb-0 ">
      <Row className="d-flex align-items-center justify-content-center position-relative">
        {slicedDishes.map((item, index) => {
          return (
            <Col
              xs={6}
              md={4}
              sm={6}
              lg={2}
              xxl={2}
              key={index}
              className="pb-3"
            >
              <BoxCard {...item} isSaved={isSaved} />
            </Col>
          );
        })}
      </Row>
      {activeLoadmore && (
        <span
          className={`${
            slicedDishes.length === maxNumber ? "no-drop" : "pointer"
          } eye-C`}
          onClick={hideDish}
        >
          <VisibilityOffTwoToneIcon className="e" />
        </span>
      )}
      {/* LOADMORE BUTTON */}
      {length > maxNumber && (
        <motion.button
          className={`${slicedDishes.length === length && "activeC"} loadMore`}
          onClick={() => handleLoadMore()}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Load More
        </motion.button>
      )}
    </Container>
  );
};

export default Menu;
