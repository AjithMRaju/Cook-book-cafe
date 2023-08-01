import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectResultDish } from "../../Redux/UserSlice";
import Infocard from "../Cards/Infocard/Infocard";


import "./Topfoods.css";

const Topfoods = () => {
  const dishes = useSelector(selectResultDish);
 

 

  return (
    <Container className="mt-5 mb-5">
      <span className="topDIsh mb-3">
        <img
          className="dishIcon"
          src="https://cdn0.iconfinder.com/data/icons/hotel-service-21/64/Hotel_Service-22-512.png"
          alt="dishLogo"
        />
        <h1 className="text-">Trending food of the week </h1>
      </span>
      <Row className="d-flex justify-content-center">
        {dishes.slice(-8).map((items, index) => {
          return (
            <Col sx={6} sm={6} md={4} lg={3} key={index} className="mb-5 mt-5">
              <Infocard {...items} index={index} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Topfoods;
