//using react-bootstrap
import React from "react";
import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../action/UserAction";

function User({ handleDelete, userInfo, editUser }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const deleteUser = () => {
    // handleDelete(userInfo.id);
    // delete userInfo.id;
    dispatch(DeleteUser(userInfo.id));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            close={handleClose}
            userInfo={userInfo}
            editUser={editUser}
          />
        </Modal.Body>
      </Modal>
      <Col md={2} style={{ width: "15rem", marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name: {userInfo.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Contact: {userInfo.contact}
            </Card.Subtitle>
            <Card.Text>Location: {userInfo.location}</Card.Text>
            <Button href="#" size="sm" variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button href="#" size="sm" variant="danger" onClick={deleteUser}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

// const mapDispatch = { DeleteUser };

// export default connect(null, mapDispatch)(User);
export default User;
