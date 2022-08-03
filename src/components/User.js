//using react-bootstrap
import React from "react";
import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function User({ handleDelete, userInfo, editUser }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const deleteUser = () => {
    handleDelete(userInfo.id);
    delete userInfo.id;
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={userInfo} editUser={editUser} />
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

export default User;
