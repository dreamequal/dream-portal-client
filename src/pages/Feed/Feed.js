import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/general/Loading/Loading";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Composer from "../../components/Composer/Composer";
import Feed, { ItemTypes } from "../../components/Feed/Feed";

import { fetchUser } from "../../stores/User/UserEffects";

import { getToken } from "../../utils/profile";


const FeedPage = () => {
    const isLoading = useSelector(state => state.user.fetch.isLoading);
    const user = useSelector(state => state.user.profile);
    const [composerValue, setComposerValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(getToken()));
    }, []);

    const submitPost = () => {
        console.log("BOOM");
    }

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.THREE}>
                    { (!isLoading && user) && (
                        <ProfileCard
                            firstName={user.firstName}
                            lastName={user.lastName}
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