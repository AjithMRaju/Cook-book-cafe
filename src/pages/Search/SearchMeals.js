import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import axiosinstance from "../../Docs/AxiosConfic";
import BoxCard from "../Cards/BoxCard/BoxCard";
import Loading from "../Loading/Loading";

import "./SearchMeals.css";

const SearchMeals = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  const getResult = async () => {
    try {
      const response = await axiosinstance.get(`search.php?s=${query}`);
      setResults(response.data.meals);
      // console.log(response.data.meals)
      setSearching(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startSearch = (e) => {
    e.preventDefault();
    setSearching(true);
    getResult();
  };

  return (
    <section className="mt-5 pb-5 text-center">
      <Container className="d-flex align-items-center justify-content-center flex-column pt-5 ">
        <motion.h1
          className="text-center"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 * 0.1 }}
        >
          Wake Up Early. <br />
          Eat Fresh & <span className="b3b3b3">Healthy.</span>
        </motion.h1>

        <motion.div
          className="mt-4 form-container "
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 2 * 0.1 }}
        >
          <Form
            className="d-flex  justify-content-center align-items-center"
            onSubmit={startSearch}
          >
            <input
              type="search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search Your Dish"
            />
            <button onClick={startSearch} className="search-btn">
              <SearchIcon />
            </button>
          </Form>
        </motion.div>
      </Container>

      {searching && <Loading />}

      <Container className="mt-5">
        <Row className="d-flex align-items-center justify-content-center">
          {results ? (
            results.map((meals, index) => {
              return (
                <Col
                  xs={6}
                  sm={4}
                  md={3}
                  lg={3}
                  xl={2}
                  key={index}
                  className="d-flex justify-content-center mb-3"
                >
                  <BoxCard {...meals} />
                </Col>
              );
            })
          ) : (
            <div className="itemsNotFoundAlert mb-5 text-center w-50">
              <h1>Sory {query} not found</h1>
              <p>please try another dish...</p>
              <p>Make sure you spelled correct...</p>
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default SearchMeals;
