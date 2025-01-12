import React, { Fragment, Children } from "react";
import { Navigate } from "react-router-dom";

const AdminPrivate = ({ children }) => {
  let adminID = sessionStorage.getItem("adminID");
  return <Fragment>{adminID ? <>{children}</> : <Navigate to="/" />}</Fragment>;
};

export default AdminPrivate;
