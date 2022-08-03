import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

const EditUserForm = (props) => {
  const [name, setName] = useState(props.userInfo.name);
  const [contact, setContact] = useState(props.userInfo.contact);
  const [location, setLocation] = useState(props.userInfo.location);
  const [id, setId] = useState(props.userInfo.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editUser(id, { name, contact, location });
    setName("");
    setContact("");
    setLocation("");
    setId("");
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone #"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={handleSubmit} classvariant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditUserForm;
