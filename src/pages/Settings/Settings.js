import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser, updateUser } from "stores/User/UserEffects";

import Container from "components/layout/Container/Container";
import Card, { CardBody } from "components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "components/layout/Row/Row";
import Loader from "components/general/Loader/Loader";
import Alert, { Types as AlertTypes } from "components/general/Alert/Alert";

import { getToken } from "utils/profile";

const SignupPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.update.isLoading);
    const formErrors = useSelector(state => state.user.update.formErrors);
    const formSuccess = useSelector(state => state.user.update.success);
    const user = useSelector(state => state.user.profile);

    // Form values
    const [ firstNameValue, setFirstNameValue ] = useState("");
    const [ lastNameValue, setLastNameValue ] = useState("");
    const [ usernameValue, setUsernameValue ] = useState("");

    // Pull user
    useEffect(() => dispatch(fetchUser(getToken())), [dispatch]);

    // Watch for store changes
    useEffect(() => setFirstNameValue(user.firstName), [user.firstName]);
    useEffect(() => setLastNameValue(user.lastName), [user.lastName]);
    useEffect(() => setUsernameValue(user.username), [user.username]);

    if (isLoading || !user) {
        return <Loader/>;
    }

    const onUpdateUser = (e) => {
        e.preventDefault();

        // Attempt to save the user profile
        dispatch(updateUser(getToken(), {
            firstName: firstNameValue,
            lastName: lastNameValue,
            username: usernameValue,
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
                        Modify your Dream Portal settings and update your profile.
                    </p>
                </Column>
                <Column size={ColumnSizes.EIGHT}>
                    <Card>
                        <CardBody>
                            <h3>Profile</h3>
                            { formSuccess && <Alert type={AlertTypes.SUCCESS} text={"User profile updated"} /> }
                            {   formErrors &&
                                Object.entries(formErrors).map((error) =>
                                    <Alert key={error[0]} type={AlertTypes.ERROR} text={error[1].message}/>
                                )
                            }
                            <form onSubmit={onUpdateUser}>
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
                                    <label className="form-control-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={usernameValue}
                                        onChange={(e) => setUsernameValue(e.target.value)}
                                    />
                                </div>
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="btn btn-info btn-sm"
                                    >
                                        <span className="btn-inner--text">Save</span>
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