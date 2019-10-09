import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileCard extends Component {
    render() {
        const {
            avatar,
            name,
            location,
        } = this.props;

        return (
            <div className="card bg-light">
                <div className="card-body">
                    <img src={avatar} className="rounded-circle mx-auto mt-2 d-block" alt="Avatar" />
                    <h5 className="mt-3 text-center">{name}</h5>
                    <p className="text-center text-muted">{location}</p>
                </div>
            </div>
        )
    }
}

ProfileCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
}

export default ProfileCard;