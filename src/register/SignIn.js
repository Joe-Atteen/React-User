import React, { useState } from "react";
import google from "../images/icons8-google.svg";
import github from "../images/icons8-github.svg";
import facebook from "../images/icons8-facebook.svg";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const SignUp = (e) => {
    e.preventDefault();
    try {
      navigate("/signup");
    } catch (e) {
      console.log(e);
    }
  };

  const SignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Succesfully signed in!");
        navigate("/", { replace: true });
      })
      .catch(() => {
        setError(true);
        alert("Ooops, couldn't sign in.");
      });
  };

  const googleSignIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Succesfully signed in!");
        navigate("/", { replace: true });
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      <div>
        <div className="login">
          <form className="form">
            <h2>SIGN IN</h2>
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
            {error && <span>Wrong email or password!</span>}
            <button onClick={SignIn}>Sign In</button>
            <button onClick={SignUp}>Create New Account</button>

            <p>Or Sign In using</p>
            <div className="logos">
              <img src={google} alt="" onClick={googleSignIn} />
              <img src={facebook} alt="" />
              <img src={github} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
