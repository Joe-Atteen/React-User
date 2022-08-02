//using react-bootstrap
import React from "react";
import { Card, Col, Button } from "react-bootstrap";

function User(props) {
  return (
    <>
      <Col md={2} style={{ width: "15rem", marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name: {props.userInfo.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Contact: {props.userInfo.contact}
            </Card.Subtitle>
            <Card.Text>Location: {props.userInfo.location}</Card.Text>
            <Button href="#" size="sm" variant="primary">
              Edit
            </Button>
            <Button href="#" size="sm" variant="danger">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default User;
