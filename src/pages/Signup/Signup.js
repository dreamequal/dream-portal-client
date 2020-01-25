import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { registerUser } from "../../stores/User/UserEffects";

import Container from "../../components/layout/Container/Container";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

import { setToken } from "../../utils/profile";

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
    const [ firstNameValue, setFirstNameValue ] = useState("");
    const [ lastNameValue, setLastNameValue ] = useState("");

    const formError = useSelector(state => state.user.register.error);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const userToken = useSelector(state => state.user.token);
    const dispatch = useDispatch();

    /**
     * Watch for a proper signup for redirect
     */
    useEffect(() => {
        if (isAuthenticated && userToken) {
            setToken(userToken);
            dispatch(push("/"));
        }
    });

    const onRegisterUser = (e) => {
        e.preventDefault();

        // Attempt to register the user
        dispatch(registerUser({
            email: emailValue,
            password: passwordValue,
            firstName: firstNameValue,
            lastName: lastNameValue
        }));
    };

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.SIX}>
                    <div className="d-flex align-items-center h-100 mr-5">
                        <div>
                            <h1 className="mb-4">
                                <i className="fas fa-user-plus"></i> Signup
                            </h1>
                            <p className="lead">
                                Creating an account gives you access to chapter resources,
                                the member directory, training, & more!
                            </p>
                        </div>
                    </div>
                </Column>
                <Column size={ColumnSizes.SIX}>
                    <Card>
                        <CardBody>
                            { formError && <Alert text={formError.toString()}/> }
                            <form onSubmit={onRegisterUser}>
                                <div className="form-group">
                                    <label className="form-control-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={firstNameValue}
                                        onChange={(e) => setFirstNameValue(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={lastNameValue}
                                        onChange={(e) => setLastNameValue(e.target.value)}
                                    />
                                </div>
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
                                        type="submit"
                                        className="btn btn-info btn-icon"
                                    >
                                        <span className="btn-inner--text">Register</span>
                                        <span className="btn-inner--icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Column>
            </Row>
        </Container>
    )
};

export default SignupPage;