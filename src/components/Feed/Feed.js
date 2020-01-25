import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem/FeedItem';

export const ItemTypes = {
    ANNOUNCEMENT: 'announcement',
};

const Feed = ({
    items,
    onNext,
    showNext
}) => (
    <div>
        {items.map((item) => (
            <FeedItem
                key={item.title}
                {...item}
            />
        ))}

        { showNext &&
            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-link text-muted"
                    onClick={onNext}
                >
                    Load More
                </button>
            </div>
        }
    </div>
);

Feed.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Feed.defaultProps = {
    items: [],
};

export default Feed;