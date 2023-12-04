import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./api";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.isAdmin === true ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default AdminRoute;
