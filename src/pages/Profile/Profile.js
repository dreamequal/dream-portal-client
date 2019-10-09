import React, { Component } from 'react';

class Profile extends Component {
    render() {
        let { username } = this.props.match.params;

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>{ username }</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;