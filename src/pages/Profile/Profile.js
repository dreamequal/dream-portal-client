import React from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";

import Hero from "../../components/layout/Hero/Hero";
import Avatar, { Sizes } from "../../components/general/Avatar/Avatar";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return [
        <Hero>
            <div className="mb-3">
                <span className="mr-3 align-middle">
                    <Avatar
                        image="https://placedog.net/500"
                        size={Sizes.LG}
                    />
                </span>
                <div className="d-inline-block">
                    <span className="h1 mb-0 text-white d-block">
                        Noah Buscher
                    </span>
                </div>
            </div>

            <span className="mb-0 d-block">
                <span className="badge badge-info badge-pill mr-2">he/him</span>
                <span className="badge badge-info badge-pill">gay</span>
            </span>
        </Hero>,
        <Container>
            <Row>
                <Column size={ColumnSizes.THREE}>
                    <div className="card card-stats bg-info">
                        <div className="card-body">
                            <div className="d-flex">
                                <div>
                                    <div className="icon text-white icon-sm">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <span className="d-block h5 text-white mr-2 mb-1">Denver, CO</span>
                                    <span className="text-white">Denver Chapter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Column>
                <Column size={ColumnSizes.NINE}>
                    <p className="text-center text-muted">
                        No posts yet!
                    </p>
                </Column>
            </Row>
        </Container>
    ];
};

export default Profile;