import React, { useState } from 'react';
import { useAuth0 } from "../../utils/react-auth0-spa";

import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Composer from "../../components/Composer/Composer";
import Feed, { ItemTypes } from '../../components/Feed/Feed';

import config from "../../config/config";

const FeedPage = () => {
    const { loading, user } = useAuth0();
    const [composerValue, setComposerValue] = useState("");

    const { getTokenSilently } = useAuth0();

    const postMessage = async () => {
        try {
            const token = await getTokenSilently();

            const response = await fetch(`${config.apiGateway.URL}/private`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            console.log(await responseData);
        } catch (error) {
            console.error(error);
        }
    };



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
                    <Composer
                        placeholder="New announcement..."
                        submitText="Post"
                        value={composerValue}
                        onValueChange={(value) => setComposerValue(value)}
                        onSubmitClick={postMessage}
                    />
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

export default FeedPage;