import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';

class Feed extends Component {
    render() {
        const {
            items,
        } = this.props;

        return (
            items.map((item) => (
                <FeedItem
                    {...item}
                    key={item.title}
                />
            ))
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