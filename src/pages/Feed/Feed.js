import React from 'react';
import { useAuth0 } from "../../utils/react-auth0-spa";

import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Feed, { ItemTypes } from '../../components/Feed/Feed';

const Home = () => {
    const { loading, user } = useAuth0();

    return (
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
                                title: 'New Courses!',
                                author: 'Ina',
                                date: '10/8/2019',
                                body: 'Hey, Dream Equal! Blah blah blah',
                                type: ItemTypes.ANNOUNCEMENT
                            },
                            {
                                title: 'Hello world!',
                                author: 'Noah',
                                date: '10/8/2019',
                                body: 'This is the beginning of the feed!',
                                type: ItemTypes.ANNOUNCEMENT
                            }
                        ]}
                    />
                </Column>
            </Row>
        </Container>
    )
};

export default Home;