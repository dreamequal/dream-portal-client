import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardBody, Alignments } from "../layout/Card/Card";
import Avatar, { Sizes } from "../general/Avatar/Avatar";

import { getInitials } from "../../utils/profile";

const ProfileCard = ({
    profileImage,
    firstName,
    lastName
}) => (
    <Card align={Alignments.CENTER}>
        <CardBody>
            <Avatar
                image={profileImage}
                size={Sizes.LG}
                initials={getInitials(firstName, lastName)}
                active
            />

            <h5 className="mt-3 mb-0">{firstName} {lastName}</h5>
        </CardBody>
    </Card>
);

ProfileCard.propTypes = {
    profileImage: PropTypes.string,
    name: PropTypes.string,
}

export default ProfileCard;