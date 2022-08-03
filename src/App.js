import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap/dist/react-bootstrap";

function App() {
  const [users, setUsers] = useState([
    { name: "Obinim", contact: 203755275, location: "Taadi", id: 1 },
    { name: "Abanga", contact: 214567663, location: "Bongo", id: 2 },
  ]);
  const addNewUser = (user) => {
    user.id = Math.random();
    setUsers([...users, user]);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <AddUserForm newUser={addNewUser} />
        </Col>
        <Col>
          <AllUsers
            userData={users}
            handleDelete={handleDelete}
            editUser={editUser}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
