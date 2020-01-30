import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import 'moment-timezone';

import Icon from "../../general/Icon/Icon";
import Avatar, { Sizes } from "../../general/Avatar/Avatar";
import Card, { CardBody, CardHeader } from "../../layout/Card/Card";
import FlexRow, { AlignItemsOptions } from 'components/layout/FlexRow/FlexRow';

const FeedItem = ({
    author,
    initials,
    createdAt,
    body,
    type,
}) => (
    <Card>
        <CardHeader>
            <FlexRow alignItems={AlignItemsOptions.CENTER}>
                <Avatar
                    initials={initials}
                    size={Sizes.MD}
                />
                <div className="avatar-content d-inline-block ml-3">
                    <h6 className="mb-0">{author}</h6>
                    <small className="d-block text-muted">
                        <Icon name="clock"/>
                        <span className="ml-2">
                            {Moment(createdAt).fromNow()}
                        </span>
                    </small>
                </div>
            </FlexRow>
        </CardHeader>
        <CardBody>
            <p className="card-text">
                {body}
            </p>
        </CardBody>
    </Card>
);

FeedItem.propTypes = {
    author: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.node,
};

export default FeedItem;