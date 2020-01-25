import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from 'connected-react-router';

import { loginUser } from "../../stores/User/UserEffects";

import Container from "../../components/layout/Container/Container";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

const Alert = ({
    text
}) => (
    <div className="alert alert-danger" role="alert">
        <strong>Heads up!</strong> {text}
    </div>
);

const SignupPage = () => {
    // Form values
    const [ emailValue, setEmailValue ] = useState("");
    const [ passwordValue, setPasswordValue ] = useState("");

    const formError = useSelector(state => state.user.error);
    const userToken = useSelector(state => state.user.token);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const dispatch = useDispatch();

    /**
     * Watch for a proper signup for redirect
     */
    useEffect(() => {
        if (isAuthenticated && userToken) {
            localStorage.setItem("auth-token", userToken);
            dispatch(push("/"));
        }
    });

    const onLoginUser = () => {
        // Attempt to log the user in
        dispatch(loginUser({
            email: emailValue,
            password: passwordValue,
        }));
    };

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.SIX}>
                    <div className="d-flex align-items-center h-100 mr-5">
                        <div>
                            <h1 className="mb-4">
                                <i className="fas fa-user-plus"></i> Login
                            </h1>
                            <p>
                                Log in to your Dream Portal account.
                            </p>
                        </div>
                    </div>
                </Column>
                <Column size={ColumnSizes.SIX}>
                    <Card>
                        <CardBody>
                            { formError && <Alert text={formError}/> }
                            <div className="form-group">
                                <label className="form-control-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={emailValue}
                                    onChange={(e) => setEmailValue(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwordValue}
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="btn btn-info btn-icon"
                                    onClick={onLoginUser}
                                >
                                    <span className="btn-inner--text">Login</span>
                                    <span className="btn-inner--icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Column>
            </Row>
        </Container>
    )
};

export default SignupPage;