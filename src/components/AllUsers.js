import React from "react";
import { Row, Container } from "react-bootstrap";
import User from "./User";

function AllUsers(props) {
  return (
    <Container>
      <Row>
        {props.userData.map((item, index) => {
          return <User key={index} userInfo={item} />;
        })}
      </Row>
    </Container>
  );
}

export default AllUsers;
