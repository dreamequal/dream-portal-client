import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ItemTypes } from './Feed';

class FeedItem extends Component {
    render() {
        const {
            title,
            author,
            date,
            body,
            type,
        } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    {title}
                    { type === ItemTypes.ANNOUNCEMENT ? <span className="badge badge-secondary ml-1 badge-info">Announcement</span> : null }
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <i className="card-subtitle text-muted">
                            Posted {date} by {author}
                        </i>
                    </div>
                    <p className="card-text">
                        {body}
                    </p>
                </div>
            </div>
        )
    }
}

FeedItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.node,
};

export default FeedItem;