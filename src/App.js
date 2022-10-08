import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase/Config";
import { useDispatch } from "react-redux";
import { AddNewUser } from "./action/UserAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveData = async () => {
      const q = query(collection(db, "users"), orderBy("timestamp", "asc"));
      const subscribe = onSnapshot(q, (querySnapshot) => {
        const usersArr = [];
        querySnapshot.forEach((doc) => {
          usersArr.push(doc.data());
        });
        dispatch(AddNewUser(usersArr));
        console.log(usersArr);
      });
    };
    retrieveData();
  }, []);

  return (
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
  );
}

export default App;
