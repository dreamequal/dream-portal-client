import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isLoading = useSelector(state => state.user.isLoading);
  const isAuthenticated = true;

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;