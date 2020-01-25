import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from 'connected-react-router';

import { fetchUser, updateUser } from "../../stores/User/UserEffects";

import Container from "../../components/layout/Container/Container";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import Loading from "../../components/general/Loading/Loading";

const Alert = ({
    text
}) => (
    <div className="alert alert-danger" role="alert">
        <strong>Heads up!</strong> {text}
    </div>
);

const SignupPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.update.isLoading);
    const formError = useSelector(state => state.user.update.error);
    const user = useSelector(state => state.user.profile);

    // Form values
    const [ firstNameValue, setFirstNameValue ] = useState("");
    const [ lastNameValue, setLastNameValue ] = useState("");

    // Pull user
    useEffect(() => dispatch(fetchUser(localStorage.getItem("auth-token"))), []);

    // Watch for store changes
    useEffect(() => setFirstNameValue(user.firstName), [user.firstName]);
    useEffect(() => setLastNameValue(user.lastName), [user.lastName]);

    if (isLoading || !user) {
        return <Loading/>;
    }

    const onUpdateUser = () => {
        // Attempt to save the user profile
        dispatch(updateUser(localStorage.getItem("auth-token"), {
            firstName: firstNameValue,
            lastName: lastNameValue,
        }));
    };

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.FOUR}>
                    <h1>
                        Settings
                    </h1>
                    <p>
                        Modify your Dream Portal settings and update your profile
                    </p>
                </Column>
                <Column size={ColumnSizes.EIGHT}>
                    <Card>
                        <CardBody>
                            <h3>Profile</h3>
                            { formError && <Alert text={formError.toString()} /> }
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
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="btn btn-info btn-sm"
                                    onClick={onUpdateUser}
                                >
                                    <span className="btn-inner--text">Save</span>
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