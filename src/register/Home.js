import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import AddUserForm from "../components/AddUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { app } from "../firebase/Config";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  let auth = getAuth(app);

  const logout = () => {
    try {
      signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };

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
        <button type="submit" className="logout" onClick={logout}>
          Logout
        </button>
      </Container>
    </div>
  );
}

export default Home;
