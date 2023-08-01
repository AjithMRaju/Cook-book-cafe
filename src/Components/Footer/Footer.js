import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

const Footer = () => {
  const redirectgmail = () => {
    const email = "ajithmraju668@gmail.com"; // Specify the desired email address here
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  const links = ["Home", "About", "Menu", "Gallery", "Blog", "Contact"];

  return (
    <footer className="mt-5 ">
      <Container className="pt-5">
        <Row>
          {/* icons */}
          <Col xs={12} lg={4} className="text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="d-flex alighn-items-center justify-content-center socil-icon mt-4 mb-5">
              <a href="https://github.com/AjithMRaju">
                <li className="me-5">
                  <GitHubIcon />
                </li>
              </a>

              <li className="me-5" onClick={redirectgmail}>
                <MailOutlinedIcon />
              </li>

              <a href="https://instagram.com/ajithmraju?igshid=MzRlODBiNWFlZA==">
                <li className="me-5">
                  <InstagramIcon />
                </li>
              </a>

              <li>
                <TwitterIcon />
              </li>
            </ul>
          </Col>

          {/* component links */}

          <Col xs={12} lg={4} className="text-center">
            <h3 className="footer-h3">Links</h3>
            <ul className="ps-0">
              {links.map((link, i) => {
                return (
                  <li key={i} className="mb-3">
                    {link}
                  </li>
                );
              })}
            </ul>
          </Col>

          {/* compoany privacy */}

          <Col xs={12} lg={4} className="text-center">
            <h3 className="footer-h3">Company</h3>
            <ul className="ps-0 text-center">
              <li className="mb-3">Terms & Conditions</li>
              <li className="mb-3">Privacy Policy</li>
              <li>Cooki Policy</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex flex-column align-items-center justify-content-center bottoum-footer">
        <motion.h4>
          Copyright 2023 <span onClick={redirectgmail}>Ajith M Raju.</span>All
          Rights Reserved.
        </motion.h4>
        <div>
          <h4>
            Backend data :
            <a href="https://www.themealdb.com/api.php">TheMealDb</a>
          </h4>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
