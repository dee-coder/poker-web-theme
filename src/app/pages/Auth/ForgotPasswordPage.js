import React, { useState, useEffect} from "react";
import "../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import axios from 'axios';
import API from "../../../apiUrl.json";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";
import firebaseConfig from "../../../firebase-config.json";
import Axios from "axios";
firebase.initializeApp(firebaseConfig);

const ForgotPassword = () => {
  const [Email, setEmail] = useState();
  const [ShowWarning,setShowWarning] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if(validateEmail(Email)){

      setShowWarning(false);

      fetch(API.baseUrl + API.forgetPassword, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body:JSON.stringify({email:Email})
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "found") {
            console.log(response);
            setStatus({
              variant:'success',
              message:response.message,
            })
            setEmail("");
          }
          else{
            if(response.status==="not_found"){
              console.log(response.message);
              setStatus({
                variant:'warning',
                message:response.message,
              })
              setEmail("");

            }
          }
        })
        .catch((err) => console.log(err));

    }else{
      setShowWarning(true);
    }
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


  return (

    <div style={{width:"400px"}}>
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">Forget Password</h3>
        <p className="text-muted font-weight-bold">
          Enter your Registered Email
        </p>
      </div>
      <form className="form fv-plugins-bootstrap fv-plugins-framework">
      <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
          <div className="alert-text ">
            Please select appropriate email of <strong>registered</strong> account
          </div>
        </div>

        {status!==null&& 
          <div className={`mb-10 alert alert-custom alert-light-${status.variant} alert-dismissible`}>
          <div className="alert-text ">
          {status.variant === "success" ? <i class="fas fa-check-circle " style={{color:"#28a745",margin:"9px"}} ></i> : <i class="fas fa-exclamation-circle" style={{color:"#ffc107",margin:"9px"}} ></i>}
            {status.message}
          </div>
        </div>
        }

        <div className="form-group fv-plugins-icon-container">
        <input
          type="email"
          placeholder="Enter registered email"
          value={Email}
          className={`mb-10 form-control form-control-solid h-auto py-5 px-6`}
          onChange={(e) => setEmail(e.target.value)}
        />

        </div>
        <div className="text-center">
         <button
         className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
         onClick={(e) => sendEmail(e)}>Send Confirmation Email</button>
         </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
