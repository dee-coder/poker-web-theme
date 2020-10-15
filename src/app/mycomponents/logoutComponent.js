import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("userInfo");
  }, []);
  return <Redirect to="/" />;
};

export default Logout;
