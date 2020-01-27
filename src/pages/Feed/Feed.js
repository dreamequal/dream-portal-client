import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Composer from "../../components/Composer/Composer";
import Feed, { ItemTypes } from "../../components/Feed/Feed";
import FeedItem from "../../components/Feed/FeedItem/FeedItem";
import Alert, { Types } from "../../components/general/Alert/Alert";

import { fetchUser } from "../../stores/User/UserEffects";
import { fetchPosts, createPost } from "../../stores/Post/PostEffects";

import { getToken, getInitials } from "../../utils/profile";


const FeedPage = () => {
    // Pagination
    const perPage = 10;
    const [page, setPage] = useState(0);
    const [digestedPosts, setDigestedPosts] = useState([]);

    // Loading states
    const isUserLoading = useSelector(state => state.user.fetch.isLoading);
    const isPostsLoading = useSelector(state => state.posts.fetch.isLoading);
    const createPostSuccess = useSelector(state => state.posts.create.success);
    const createPostError = useSelector(state => state.posts.create.error);
    const pageCount = useSelector(state => state.posts.pageCount);

    const user = useSelector(state => state.user.profile);
    const posts = useSelector(state => state.posts.posts);

    const [composerValue, setComposerValue] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const digested = posts.map((post) => {
            return {
                id: post._id,
                author: `${post.postedBy.firstName} ${post.postedBy.lastName}`,
                initials: getInitials(post.postedBy.firstName, post.postedBy.lastName),
                createdAt: post.createdAt,
                body: post.content,
                type: ItemTypes.ANNOUNCEMENT
            };
        });
        setDigestedPosts(digested);
    }, [posts]);

    // Get user
    useEffect(() => {
        dispatch(fetchUser(getToken()));
    }, [dispatch]);

    // Get posts on load/page change
    useEffect(() => {
        dispatch(fetchPosts(getToken(), page, perPage));
    }, [dispatch, page, perPage]);

    // Create new post
    const submitPost = () => {
        dispatch(createPost(getToken(), composerValue));
        setComposerValue("");
    }

    // Load more posts
    const loadMorePosts = () => {
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
                            <div className="actions d-flex justify-content-center">
                                <Link to="/settings" className="action-item">
                                    <i className="fas fa-user-edit"></i>
                                </Link>
                            </div>
                        }
                    />
                </Column>
                <Column size={ColumnSizes.NINE}>
                    { createPostSuccess && <Alert type={Types.SUCCESS} text="Post created successfully"/>}
                    { createPostError && <Alert type={Types.ERROR} text={createPostError} />}
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
                            onSubmitClick={submitPost}
                        />
                    }
                    <Feed
                        items={digestedPosts}
                        showNext={pageCount > page}
                        loading={isPostsLoading}
                        onNext={loadMorePosts}
                    />
                </Column>
            </Row>
        </Container>
    )
};

export default FeedPage;