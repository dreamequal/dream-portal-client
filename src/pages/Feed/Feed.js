import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Composer from "../../components/Composer/Composer";
import Feed, { ItemTypes } from "../../components/Feed/Feed";

import { fetchUser } from "../../stores/User/UserEffects";


const FeedPage = () => {
    const isLoading = useSelector(state => state.user.isLoading);
    const user = useSelector(state => state.user);
    const [composerValue, setComposerValue] = useState("");
    const dispatch = useDispatch();

    const submitPost = () => {
        // getTokenSilently()
        //     .then((t) => dispatch(fetchUser(t)));
        console.log("BOOM");
    }

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.THREE}>
                    { (!isLoading && user) && (
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
                        onSubmitClick={submitPost}
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