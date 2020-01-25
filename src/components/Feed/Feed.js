import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem/FeedItem';

export const ItemTypes = {
    ANNOUNCEMENT: 'announcement',
};

const Feed = ({
    items,
    onNext,
    showNext,
    loading,
}) => {
    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-grow" role="status"></div>
            </div>
        );
    }

    return (
        <div>
            {items.map((item) => (
                <FeedItem
                    key={item.id}
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
};

Feed.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Feed.defaultProps = {
    items: [],
    loading: true,
};

export default Feed;