import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

import Container from "components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "components/layout/Row/Row";
import ProfileCard from "components/ProfileCard/ProfileCard";
import Composer from "components/Composer/Composer";
import Feed, { ItemTypes } from "components/Feed/Feed";
import FeedItem from "components/Feed/FeedItem/FeedItem";
import Alert, { Types } from "components/general/Alert/Alert";

import { fetchUser } from "stores/User/UserEffects";
import { fetchAnnouncements, createAnnouncement } from "stores/Announcement/AnnouncementEffects";

import { getToken, getInitials } from "utils/profile";
import FlexRow, { JustifyOptions } from "components/layout/FlexRow/FlexRow";
import Icon from "components/general/Icon/Icon";


const FeedPage = () => {
    // Pagination
    const perPage = 10;
    const [page, setPage] = useState(0);
    const [digestedAnnouncements, setDigestedAnnouncements] = useState([]);

    // Loading states
    const isUserLoading = useSelector(state => state.user.fetch.isLoading);
    const isAnnouncementsLoading = useSelector(state => state.announcements.fetch.isLoading);
    const createAnnouncementSuccess = useSelector(state => state.announcements.create.success);
    const createAnnouncementError = useSelector(state => state.announcements.create.error);
    const pageCount = useSelector(state => state.announcements.pageCount);

    const user = useSelector(state => state.user.profile);
    const announcements = useSelector(state => state.announcements.announcements);

    const [composerValue, setComposerValue] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const digested = announcements.map((post) => {
            return {
                id: post._id,
                author: `${post.postedBy.firstName} ${post.postedBy.lastName}`,
                initials: getInitials(post.postedBy.firstName, post.postedBy.lastName),
                createdAt: post.createdAt,
                body: post.content,
                type: ItemTypes.ANNOUNCEMENT
            };
        });
        setDigestedAnnouncements(digested);
    }, [announcements]);

    // Get user
    useEffect(() => {
        dispatch(fetchUser(getToken()));
    }, [dispatch]);

    // Get announcements on load/page change
    useEffect(() => {
        dispatch(fetchAnnouncements(getToken(), page, perPage));
    }, [dispatch, page, perPage]);

    // Create new announcement
    const submitAnnouncement = () => {
        dispatch(createAnnouncement(getToken(), composerValue));
        setComposerValue("");
    }

    // Load more announcements
    const loadMoreAnnouncements = () => {
        setPage(page + 1);
    }

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.THREE}>
                    <ProfileCard
                        loading={isUserLoading}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        username={user.username}
                        footer={
                            <FlexRow justifyContent={JustifyOptions.CENTER} className="actions">
                                <Link to="/settings" className="action-item">
                                    <Icon name="user-edit"/>
                                </Link>
                            </FlexRow>
                        }
                    />
                </Column>
                <Column size={ColumnSizes.NINE}>
                    { createAnnouncementSuccess && <Alert type={Types.SUCCESS} text="Announcement created successfully"/>}
                    { createAnnouncementError && <Alert type={Types.ERROR} text={createAnnouncementError} />}
                    { user.permissions > 1 &&
                        <Composer
                            placeholder="New announcement..."
                            submitText="Post"
                            confirmSubmit={true}
                            confirmSubmitMessage={
                                <>
                                    <p>Are you sure you want to post this announcement?</p>
                                    <div className="mt-4">
                                        <FeedItem
                                            title=""
                                            author={`${user.firstName} ${user.lastName}`}
                                            initials={getInitials(user.firstName, user.lastName)}
                                            createdAt={Date.now()}
                                            body={composerValue}
                                            type={ItemTypes.ANNOUNCEMENT}
                                        />
                                    </div>
                                </>
                            }
                            value={composerValue}
                            onValueChange={(value) => setComposerValue(value)}
                            onSubmitClick={submitAnnouncement}
                        />
                    }
                    <Feed
                        items={digestedAnnouncements}
                        showNext={pageCount > page}
                        loading={isAnnouncementsLoading}
                        onNext={loadMoreAnnouncements}
                    />
                </Column>
            </Row>
        </Container>
    )
};

export default FeedPage;