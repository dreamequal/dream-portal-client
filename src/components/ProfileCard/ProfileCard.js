import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardBody, Alignments } from "../layout/Card/Card";
import Avatar, { Sizes } from "../general/Avatar/Avatar";

const ProfileCard = ({
    profileImage,
    name,
    location,
}) => {
    const initials = name.split(" ");
    return (
        <Card align={Alignments.CENTER}>
            <CardBody>
                <Avatar
                    image={profileImage}
                    size={Sizes.LG}
                    initials={`${initials[0][0]}${initials[1][0]}`}
                    active
                />

                <h5 className="mt-3 mb-0">{name}</h5>
                <span className="d-block text-sm text-muted mb-3">{location}</span>
            </CardBody>
        </Card>
    );
};

ProfileCard.propTypes = {
    profileImage: PropTypes.string,
    name: PropTypes.string,
    // location: PropTypes.string,
}

export default ProfileCard;