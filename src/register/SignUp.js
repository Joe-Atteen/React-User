import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = (e) => {
    e.preventDefault();
    try {
      navigate("/");
    } catch (e) {
      console.log(e);
    }

    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Succesfully created account!");
      })
      .catch(() => {
        alert("Ooops, couldn't create account.");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="login">
        <form className="form">
          <h2>SIGN UP</h2>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={SignUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
