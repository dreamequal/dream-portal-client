import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ItemTypes } from './Feed';

const FeedItem = ({
    title,
    author,
    date,
    body,
    type,
}) => (
    <div class="card">
        <div class="card-header py-4 d-flex align-items-center">
            <div>
                <img
                    alt="Image placeholder"
                    src="https://placedog.net/500"
                    class="avatar rounded-circle hover-shadow-lg hover-scale-110"
                />
            </div>
            <div class="pl-3">
                <div class="text-sm">
                    <a href="#!" class="font-weight-bold">{author}</a>
                    { type === ItemTypes.ANNOUNCEMENT ? <span className="badge badge-soft-info badge-pill ml-2">Announcement</span> : null }
                </div>
                <small class="d-block">{date}</small>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">
                {body}
            </p>
        </div>
    </div>
);

FeedItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.node,
};

export default FeedItem;