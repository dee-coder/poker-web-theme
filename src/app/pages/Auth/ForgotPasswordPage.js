import React, { useState } from "react";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";
import firebaseConfig from "../../../firebase-config.json";
firebase.initializeApp(firebaseConfig);

const ForgotPassword = () => {
  const [Email, setEmail] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    firebase.auth().sendPasswordResetEmail(Email);
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter registred email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={(e) => sendEmail(e)}> Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
