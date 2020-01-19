import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';

export const ItemTypes = {
    ANNOUNCEMENT: 'announcement',
};

const Feed = ({
    items,
}) => (
    <div>
        {items.map((item) => (
            <FeedItem
                {...item}
                key={item.title}
            />
        ))}

        <div className="text-center">
        <button type="button" class="btn btn-primary rounded-pill">
            Load More
        </button>
        </div>
    </div>
);

Feed.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Feed.defaultProps = {
    items: [],
};

export default Feed;