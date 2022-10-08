import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { AddNewUser } from "../action/UserAction";
import { connect } from "react-redux";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/Config";

function AddUserForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userInfo = {
      name,
      contact,
      location,
      id: uuidv4(),
      timestamp: serverTimestamp(),
    };
    // dispatch(AddNewUser(userInfo));
    try {
      await setDoc(doc(db, "users", userInfo.id), userInfo);
    } catch (e) {
      console.log(e);
    }

    setName("");
    setContact("");
    setLocation("");
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
}
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserForm);
