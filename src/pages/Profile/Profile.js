import React from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";

import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Feed from "../../components/Feed/Feed";

const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return [
        <Hero>
            <span className="h1 mb-0 text-white d-block">
                Noah Buscher
            </span>
            <span className="mb-0 d-block">
                <span class="badge badge-info badge-pill mr-2">he/him</span>
                <span class="badge badge-info badge-pill">queer</span>
            </span>
        </Hero>,
        <Container>
            <Row>
                <Column size={ColumnSizes.THREE}>
                    { (!loading && user) && (
                        <ProfileCard
                            profileImage={user.picture}
                            name={user.nickname}
                            location={user.name}
                        />
                    )}
                </Column>
                <Column size={ColumnSizes.NINE}>
                    <Feed
                        items={[
                            {
                                title: 'Hello world!',
                                author: 'Noah',
                                date: '10/8/2019',
                                body: 'This is the beginning of the feed!'
                            }
                        ]}
                    />
                </Column>
            </Row>
        </Container>
    ];
};

export default Profile;