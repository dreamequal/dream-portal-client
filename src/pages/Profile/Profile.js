import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../../components/layout/Hero/Hero";
import Badge from "../../components/general/Badge/Badge";
import Card, { CardBody, Types } from "../../components/layout/Card/Card";
import Icon from "../../components/general/Icon/Icon";
import Avatar, { Sizes } from "../../components/general/Avatar/Avatar";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

const ProfilePage = () => {
    const isLoading = useSelector(state => state.user.isLoading);
    const user = useSelector(state => state.user);

    if (isLoading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Hero>
                <div className="d-flex align-items-center mb-3">
                    <Avatar
                        image="https://placedog.net/500"
                        size={Sizes.LG}
                    />
                    <div className="ml-4">
                        <h2 className="text-white">
                            Noah Buscher
                        </h2>
                        <div>
                            <Badge text="he/him"/>
                            <Badge text="gay"/>
                        </div>
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
                                            <Icon name="map-marked-alt"/>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <span className="d-block h5 text-white mr-2 mb-1">Denver, CO</span>
                                        <span className="text-white">Denver Chapter</span>
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