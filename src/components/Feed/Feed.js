import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';

export const ItemTypes = {
    ANNOUNCEMENT: 'announcement',
};

class Feed extends Component {
    render() {
        const {
            items,
        } = this.props;

        return (
            <div>
                {items.map((item) => (
                    <FeedItem
                        {...item}
                        key={item.title}
                    />
                ))}

                <div className="text-center">
                    <button type="button" className="btn btn-secondary">Load More</button>
                </div>
            </div>
        )
    }
}

Feed.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Feed.defaultProps = {
    items: [],
};

export default Feed;