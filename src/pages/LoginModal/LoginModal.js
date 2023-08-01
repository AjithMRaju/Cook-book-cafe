import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import Modal from "react-bootstrap/Modal";
import loginIcon from "../../Assets/footer-image/Login-icon.jpg";
import LockIcon from "@mui/icons-material/Lock";
import Progressbar from "../Cards/Progressbar/Progressbar";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { auth } from "../../Docs/Firbase";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  selectUser,
  selectIsOpen,
  openModal,
  closeModal,
} from "../../Redux/UserSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

const LoginModal = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const isOpen = useSelector(selectIsOpen);
  const valuse = "xxl-down";
  const IMG_2="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?w=740&t=st=1690729287~exp=1690729887~hmac=4bf61d02930541f64d178961cba6d19b95ffa09ba90eb7d4ee661e5fd4449995"
  const IMG_URL =
    "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1690699265~exp=1690699865~hmac=5e64baa2f8d994f9b464369dd99b971edbddf655edb62793e145e7f137785e1d";

  const [emailId, setEmailId] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirPassword] = useState("");
  const [error, setError] = useState("");
  const [condition, setCodition] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [progressbar, setProgressbar] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  // loginmodal
  const handleClose = () => {
    dispatch(closeModal());
  };

  // loginmodal
  const handleShow = (brakepoints) => {
    dispatch(openModal());
    setFullscreen(brakepoints);
  };

  // register function..
  const userSignUp = async (e) => {
    e.preventDefault();
    setProgressbar(true);
    if (confirmPassword === passWord) {
      try {
        const authUser = await createUserWithEmailAndPassword(
          auth,
          emailId,
          confirmPassword
        );
        setCodition(false);
      } catch (error) {
        setError(error.message);
        setProgressbar(false);
      } finally {
        setProgressbar(false);
      }
    } else {
      setError("Password Incorrect");
      setProgressbar(false);
    }
  };

  // Login finction..
  const userLogin = async (e) => {
    e.preventDefault();
    setProgressbar(true);
    try {
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailId,
        passWord
      );
      toast.success(`Succesfully loggined ${authUser.user.email}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setProgressbar(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  // rendering Login or signup with conditonal rendering..
  const checkLoginState = () => {
    return (
      <>
        <div className="username mb-3 d-flex justify-content-center align-items-center">
          <PersonIcon />
          <input
            type="email"
            className="uset-input"
            placeholder="Email-ID"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
        </div>
        <div className="password mb-3 d-flex justify-content-center align-items-center">
          <LockIcon />
          <input
            type={showPassword ? "text" : "password"}
            value={passWord}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {showPassword ? (
            <RemoveRedEyeSharpIcon
              className="showIcons"
              onClick={toggleShowPassword}
            />
          ) : (
            <VisibilityOffSharpIcon
              className="showIcons"
              onClick={toggleShowPassword}
            />
          )}
        </div>

        {!condition ? (
          <button className="sign-in-btn" onClick={userLogin}>
            Login
          </button>
        ) : (
          <>
            <div className="password mb-4 d-flex justify-content-center align-items-center">
              <LockIcon />
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                placeholder="Confirm password"
                onChange={(e) => {
                  setConfirPassword(e.target.value);
                }}
              />
              {showPassword ? (
                <RemoveRedEyeSharpIcon
                  className="showIcons"
                  onClick={toggleShowPassword}
                />
              ) : (
                <VisibilityOffSharpIcon
                  className="showIcons"
                  onClick={toggleShowPassword}
                />
              )}
            </div>
            <button className="sign-in-btn" onClick={userSignUp}>
              SignUp
            </button>
          </>
        )}

        <div className="my-3">{progressbar && <Progressbar />}</div>

        <div className="links">
          {condition ? (
            <>
              <span>Back to </span>
              <span className="sign-up-span" onClick={() => setCodition(false)}>
                Login
              </span>
            </>
          ) : (
            <>
              <span>Create an account? </span>
              <span className="sign-up-span" onClick={() => setCodition(true)}>
                SignUp.
              </span>
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <PersonIcon
        className="persomSvg"
        onClick={() => {
          handleShow(valuse);
        }}
      />

      <Modal show={isOpen} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Container>
            <Row>
              <Col xs={12} lg={6} className=" d-flex align-items-center justify-content-center">
                <div className="login-div px-5 py-3 mb-5">
                  {userName?.email && (
                    <p className="text-center p-0 m-0 ">Loged In</p>
                  )}
                  {error && <Alert variant="danger">{error}</Alert>}
                  <div className="subtitile text-center">{userName?.email}</div>
                  <div className="fileds pt-3">{checkLoginState(userName)}</div>
                </div>
              </Col>
              <Col xs={12} lg={6} className="col-2">
                <img src={IMG_2} alt="" />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;

// backup
// const userSignUp = async (e) => {
//   e.preventDefault();
//   setProgressbar(true);
//   try {
//     const authUser = await createUserWithEmailAndPassword(
//       auth,
//       emailId,
//       passWord
//     );
//     setCodition(false);
//   } catch (error) {
//     setError(error.message);
//     setProgressbar(false);
//   } finally {
//     setProgressbar(false);
//   }
// };

{
  /* <div className="login-div px-5 py-3 mb-5">
  <div className="login-logo">
    <img src={loginIcon} alt="loginIcon" />
  </div>
  <div className="login-titile pt-2 text-center">CookbookCafe</div>
  {userName?.email && <p className="text-center p-0 m-0 ">Loged In</p>}
  {error && <Alert variant="danger">{error}</Alert>}
  <div className="subtitile text-center">{userName?.email}</div>
  <div className="fileds pt-3">{checkLoginState(userName)}</div>
</div>; */
}
