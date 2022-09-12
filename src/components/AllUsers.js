import React from "react";
import { Row, Container } from "react-bootstrap";
import User from "./User";
import { useSelector } from "react-redux";

function AllUsers({ userData, handleDelete, editUser }) {
  const { users } = useSelector((store) => store);

  return (
    <Container>
      <Row>
        {users.map((user, index) => {
          return (
            <User
              key={index}
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
