import React from "react";
import { FAQ } from "../../Docs/Functions";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import FaqImage from "../../Assets/FAQ/testimationalImage.png";
import FaqCard from "../Cards/FaqCard/FaqCard";

const Faq = () => {
 

  return (
    <section className="mt-5 mb-5">
      <Container>

        <motion.h1
          className="text-center mb-5 text-"
          initial={{x:-100}}
          whileInView={{x:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
        >
          Frequently Asked Questions
        </motion.h1>

        <Row>
          <Col lg={5} className="p-0">
            <motion.img 
              src={FaqImage} 
              alt="cookingirl" 
              className="testimation-img" 
              initial={{x:-100}}
              whileInView={{x:0}}
              viewport={{once:true}}
              transition={{duration:0.8}}
              />
          </Col>
          <Col lg={7} className="p-0">
            <Row className="justify-content-around">
              {FAQ.map((item, i) => {
                return (
                  <Col lg={5} className="mb-5  p-0 " key={i}>
                    <FaqCard {...item} i={i} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
