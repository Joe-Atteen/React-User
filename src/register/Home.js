import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import AddUserForm from "../components/AddUserForm";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <AddUserForm />
          </Col>
          <Col>
            <AllUsers />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
