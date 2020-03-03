import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
	const isAuthenticated = useSelector(state => state.user.isAuthenticated);

	if (!isAuthenticated) {
		return <Redirect from="*" to="/" />;
	}

  	const render = props =>
		isAuthenticated ? <Component {...props} /> : null;

  	return <Route path={path} render={render} {...rest} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
};

export default PrivateRoute;