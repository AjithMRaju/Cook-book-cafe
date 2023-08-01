import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FaqCard.css";

const FaqCard = ({ question, answer,i }) => {

  const [readMore, setReadMore] = useState(false);
  const maxLength = 100;

  const showAnswer = (answer) => {
    if (!readMore) {
      return (
        <>
          <p className="mb-0 text-start contentp-p">
            {answer?.slice(0, maxLength)}

            <span
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              ...
            </span>
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="mb-0 text-start">
            {answer}
            <span
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              ...
            </span>
          </p>
        </>
      );
    }
  };

  return (
    <motion.div 
      className="testimation-box text-center mb-4"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1}}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.1 }}
    >
      <h3>{question}</h3>
      {showAnswer(answer)}
    </motion.div>
  );
};

export default FaqCard;
