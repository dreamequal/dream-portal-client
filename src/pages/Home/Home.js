import React, { Component } from 'react';

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Feed, { ItemTypes } from '../../components/Feed/Feed';

class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <ProfileCard
                            avatar="http://placekitten.com/80/80"
                            name="Noah Buscher"
                            location="Denver, USA"
                        />
                    </div>
                    <div className="col-9">
                        <Feed
                            items={[
                                {
                                    title: 'New Courses!',
                                    author: 'Ina',
                                    date: '10/8/2019',
                                    body: 'Hey, Dream Equal! Blah blah blah',
                                    type: ItemTypes.ANNOUNCEMENT
                                },
                                {
                                    title: 'Hello world!',
                                    author: 'Noah',
                                    date: '10/8/2019',
                                    body: 'This is the beginning of the feed!'
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;