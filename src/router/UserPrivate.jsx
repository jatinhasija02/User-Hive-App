import React from "react";
import { Children } from "react";
import { Fragment } from "react";
import { Navigate } from "react-router-dom";

const UserPrivate = ({ children }) => {
  let userID = sessionStorage.getItem("userID");
  return <Fragment>{userID ? <>{children}</> : <Navigate to="/" />}</Fragment>;
};

export default UserPrivate;
