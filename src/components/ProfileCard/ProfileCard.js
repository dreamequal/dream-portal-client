import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardBody, CardFooter, Alignments } from "../layout/Card/Card";
import Avatar, { Sizes } from "../general/Avatar/Avatar";

const ProfileCard = ({
    profileImage,
    name,
    location,
}) => (
    <Card align={Alignments.CENTER}>
        <CardBody>
            <Avatar
                image={profileImage}
                size={Sizes.LG}
                active
            />

            <h5 class="mt-3 mb-0">{name}</h5>
            <a href="#" class="d-block text-sm text-muted mb-3">{location}</a>
        </CardBody>
        <CardFooter>
            <div class="actions d-flex justify-content-between">
                <a href="#" class="action-item">
                    <span class="btn-inner--icon">Projects</span>
                </a>
                <a href="#" class="action-item">
                    <span class="btn-inner--icon">See profile</span>
                </a>
            </div>
        </CardFooter>
    </Card>
);

ProfileCard.propTypes = {
    profileImage: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
}

export default ProfileCard;