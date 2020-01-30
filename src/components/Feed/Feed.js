import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem/FeedItem';
import FlexRow, { JustifyOptions } from 'components/layout/FlexRow/FlexRow';
import Loader from 'components/general/Loader/Loader';
import Button, { Types } from 'components/actions/Button/Button';

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
            <FlexRow justifyContent={JustifyOptions.CENTER}>
                <Loader/>
            </FlexRow>
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

            {showNext &&
                <FlexRow justifyContent={JustifyOptions.CENTER}>
                    <Button
                        label="Load More"
                        type={Types.LINK}
                        onClick={onNext}
                    />
                </FlexRow>
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