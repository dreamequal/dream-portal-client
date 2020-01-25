import React from 'react';
import PropTypes from 'prop-types';

import Icon from "../../general/Icon/Icon";
import Avatar, { Sizes } from "../../general/Avatar/Avatar";
import Card, { CardBody } from "../../layout/Card/Card";

import { ItemTypes } from '../Feed';

const FeedItem = ({
    title,
    author,
    initials,
    date,
    body,
    type,
}) => (
    <Card>
        { type === ItemTypes.ANNOUNCEMENT &&
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-info text-white">
                <Icon name="bullhorn"/>
            </span>
        }
        <div className="card-header py-2 d-flex align-items-center mt-n4">
            <div className="d-flex align-items-center">
                <Avatar
                    initials={initials}
                    size={Sizes.MD}
                />
                <div className="avatar-content d-inline-block ml-3">
                    <h6 className="mb-0">{author}</h6>
                    <small className="d-block text-muted">
                        <Icon name="clock"/>
                        <span className="ml-2">3 hours ago</span>
                    </small>
                </div>
            </div>
        </div>
        <CardBody>
            <p className="card-text">
                {body}
            </p>
        </CardBody>
    </Card>
);

FeedItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.node,
};

export default FeedItem;