import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../Docs/Firbase";
import Modal from "react-bootstrap/Modal";
import LogoutIcon from "@mui/icons-material/Logout";

function LogoutModal() {
  const [show, setShow] = useState(false);
  const userAuth = useSelector(selectUser);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signout = () => {
    signOut(auth);
    handleClose();
  };

  const spanStyle={
    color:"blue",
    fontSize:"1.7rem",
    padding:"15px"
  }
  return (
    <>
      <LogoutIcon onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Are you sure you want to signout <br />
          <span style={spanStyle}>{userAuth?.email}</span>
        </Modal.Body>
        <Modal.Footer className="mt-2">
          <button className="logOutBtn me-4" onClick={handleClose}>
            Cancel
          </button>
          <button className="signOutBtn" onClick={signout}>
            Signout
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;
