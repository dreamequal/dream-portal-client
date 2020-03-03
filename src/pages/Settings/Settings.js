import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser, updateUser } from "stores/User/UserEffects";

import Container from "components/layout/Container/Container";
import Card, { CardBody } from "components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "components/layout/Row/Row";
import Loader from "components/general/Loader/Loader";
import Alert, { Types as AlertTypes } from "components/general/Alert/Alert";
import TextField from "components/inputs/TextField/TextField";
import DatePicker from "components/inputs/DatePicker/DatePicker";
import Dropdown from "components/inputs/Dropdown/Dropdown";

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
    const [ locationValue, setLocationValue ] = useState("");
    const [ pronounValue, setPronounValue ] = useState("");
    const [ birthdayValue, setBirthdayValue ] = useState("");

    // Pull user
    useEffect(() => dispatch(fetchUser(getToken())), [dispatch]);

    // Watch for store changes
    useEffect(() => setFirstNameValue(user.firstName), [user.firstName]);
    useEffect(() => setLastNameValue(user.lastName), [user.lastName]);
    useEffect(() => setUsernameValue(user.username), [user.username]);
    useEffect(() => setLocationValue(user.location), [user.location]);
    useEffect(() => setPronounValue(user.pronouns), [user.pronouns]);
    useEffect(() => setBirthdayValue(user.birthday), [user.birthday]);

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
            location: locationValue,
            pronouns: pronounValue,
            birthday: birthdayValue,
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
                                <TextField
                                    label="First Name"
                                    value={firstNameValue}
                                    error={!firstNameValue}
                                    onChange={(e) => setFirstNameValue(e.target.value)}
                                />
                                <TextField
                                    label="Last Name"
                                    value={lastNameValue}
                                    error={!lastNameValue}
                                    onChange={(e) => setLastNameValue(e.target.value)}
                                />
                                 <TextField
                                    label="Username"
                                    value={usernameValue}
                                    error={!usernameValue}
                                    onChange={(e) => setUsernameValue(e.target.value)}
                                />
                                <TextField
                                    label="Location"
                                    placeholder="Lincoln, NE"
                                    value={locationValue}
                                    error={!locationValue}
                                    onChange={(e) => setLocationValue(e.target.value)}
                                />
                                <Dropdown
                                    label="Pronouns"
                                    value={pronounValue}
                                    error={!pronounValue}
                                    onChange={(e) => setPronounValue(e.target.value)}
                                    options={[
                                        { label: "", value: "" },
                                        { label: "She/Her", value: "she/her" },
                                        { label: "She/They", value: "she/they" },
                                        { label: "He/Him", value: "he/him" },
                                        { label: "He/They", value: "he/they" },
                                        { label: "Ve/Ver", value: "ve/ver" },
                                        { label: "Xe/Xem", value: "xe/xem" },
                                        { label: "Ze/Hir", value: "ze/hir" },
                                        { label: "Ze/Zir", value: "ze/zir" },
                                        { label: "They/Them", value: "they/them" },
                                        { label: "Other", value: "Other" },
                                    ]}
                                />
                                <DatePicker
                                    label="Birthday"
                                    value={birthdayValue}
                                    error={!birthdayValue}
                                    onChange={(e) => setBirthdayValue(e.target.value)}
                                />
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