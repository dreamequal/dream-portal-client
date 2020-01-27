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
    <div className="card">
        <div className="card-header py-4 d-flex align-items-center">
            <div>
                <img
                    alt="Avatar"
                    src="https://placedog.net/500"
                    className="avatar rounded-circle hover-shadow-lg hover-scale-110"
                />
            </div>
            <div className="pl-3">
                <div className="text-sm">
                    <a href="#!" className="font-weight-bold">{author}</a>
                    { type === ItemTypes.ANNOUNCEMENT && <Badge text="Announcement"/> }
                </div>
                <small className="d-block">{date}</small>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text">
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