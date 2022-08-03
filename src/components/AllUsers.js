import React from "react";
import { Row, Container } from "react-bootstrap";
import User from "./User";

function AllUsers({ userData, handleDelete, editUser }) {
  return (
    <Container>
      <Row>
        {userData.map((user) => {
          return (
            <User
              key={user.id}
              userInfo={user}
              handleDelete={handleDelete}
              editUser={editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllUsers;
