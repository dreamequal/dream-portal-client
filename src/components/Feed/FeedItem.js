import React from 'react';
import PropTypes from 'prop-types';

import Badge from "../general/Badge/Badge";

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
                    alt="Avatar"
                    src="https://placedog.net/500"
                    class="avatar rounded-circle hover-shadow-lg hover-scale-110"
                />
            </div>
            <div class="pl-3">
                <div class="text-sm">
                    <a href="#!" class="font-weight-bold">{author}</a>
                    { type === ItemTypes.ANNOUNCEMENT && <Badge text="Announcement"/> }
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