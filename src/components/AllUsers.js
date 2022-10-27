import React from "react";
import { Row, Container } from "react-bootstrap";
import User from "./User";
import { useSelector } from "react-redux";

function AllUsers() {
  const users = useSelector((state) => {
    return state.UserReducer.users;
  });

  return (
    <Container>
      <Row>
        {users.map((user, index) => {
          return <User key={index} userInfo={user} />;
        })}
      </Row>
    </Container>
  );
}

export default AllUsers;
