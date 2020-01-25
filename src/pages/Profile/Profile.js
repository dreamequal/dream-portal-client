import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/general/Loading/Loading";
import Hero from "../../components/layout/Hero/Hero";
import Badge from "../../components/general/Badge/Badge";
import Card, { CardBody, Types } from "../../components/layout/Card/Card";
import Icon from "../../components/general/Icon/Icon";
import Avatar, { Sizes } from "../../components/general/Avatar/Avatar";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

import { fetchUser } from "../../stores/User/UserEffects";
import { getInitials } from "../../utils/profile";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.fetch.isLoading);
    const user = useSelector(state => state.user.profile);

    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem("auth-token")));
    }, []);

    if (isLoading || !user) {
        return <Loading/>;
    }

    return (
        <>
            <Hero>
                <div className="d-flex align-items-center mb-3">
                    <Avatar
                        initials={getInitials(user.firstName, user.lastName)}
                        size={Sizes.LG}
                    />
                    <div className="ml-4">
                        <h2 className="text-white">
                            {user.firstName} {user.lastName}
                        </h2>
                    </div>
                </div>
            </Hero>
            <Container>
                <Row>
                    <Column size={ColumnSizes.THREE}>
                        <Card type={Types.INFO}>
                            <CardBody>
                                <div className="d-flex">
                                    <div>
                                        <div className="icon text-white icon-sm">
                                            <Icon name="award"/>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <span className="d-block h5 text-white mr-2 mb-1">Achievement</span>
                                        <span className="text-white">Early Adopter</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Column>
                    <Column size={ColumnSizes.NINE}>
                        <p className="text-center text-muted">
                            No posts yet!
                        </p>
                    </Column>
                </Row>
            </Container>
        </>
    );
};

export default ProfilePage;