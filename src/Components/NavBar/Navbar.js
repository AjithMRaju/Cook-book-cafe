import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navDetails } from "../../Docs/Functions";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectIndicatorColor,
  setIndicatorColor,
} from "../../Redux/UserSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "../../pages/LoginModal/LoginModal";
import LogoutModal from "../../pages/LogoutModal/LogoutModal";
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import "./NavBar.css";

const NavBar = () => {

  const dispatch = useDispatch();
  const userAuth = useSelector(selectUser);
  const indicator = useSelector(selectIndicatorColor);
  const [initial, setInitial] = useState("Home");
 

  const navStyle = (id) => {
    setInitial(id);
  };

  // displaynig signuout popup
  const showSignout = () => {
    if (userAuth) {
      return (
        <Nav.Link className="mt-0 mb-auto">
          <span className=" nav-icons text-center ">
            <LogoutModal />
          </span>
        </Nav.Link>
      );
    }
  };

  // romoving collection redIcon functuion..
  const removeColor = (id) => {
    const collectionPath = "saved";
    if (collectionPath === id && indicator) {
      dispatch(setIndicatorColor(null));
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="customColor py-0"
    >
      <Container className="py-2">
        <Navbar.Brand as={Link} to={"/"}>
          CookbookCafe
          <img
            src="https://i.pinimg.com/originals/58/8d/a7/588da7a4f99c81c8f7d6053790378c58.png"
            alt="brandLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navDetails.map((items, i) => {
              return (
                <Nav.Link
                  as={Link}
                  to={items.path}
                  key={i}
                  className={
                    initial === items.id
                      ? "activeClass me-2 mb-4 text-center"
                      : "initialClass me-2 mb-4"
                  }
                  onClick={() => {
                    navStyle(items.id);
                    removeColor(items.id);
                  }}
                >
                  {items.title}
                </Nav.Link>
              );
            })}

            {indicator && <span className="indicator"> <NotificationsSharpIcon/></span>}
            <Nav.Link className="me-2 mb-4">
              <span className=" nav-icons text-center">
                <LoginModal />
              </span>
            </Nav.Link>
            {showSignout()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
