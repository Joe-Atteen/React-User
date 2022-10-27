import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase/Config";
import { useDispatch } from "react-redux";
import { AddNewUser } from "./action/UserAction";
import Routers from "./Routers";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/Config";
import { dispatchUser } from "./action/AuthAction";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  useEffect(() => {
    const retrieveData = async () => {
      const q = query(collection(db, "users"), orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
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

  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      if (users) {
        dispatch(dispatchUser(users));
      } else {
        dispatch(dispatchUser(null));
      }
      console.log(users);
    });
  }, []);

  return (
    <Container className="container">
      <Routers />
    </Container>
  );
}

export default App;
