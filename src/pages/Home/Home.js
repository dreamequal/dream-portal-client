import React, { Component } from 'react';

import Feed from '../../components/Feed/Feed';

class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h5 className="text-center mb-4">
                            Announcements
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Feed
                            items={[
                                {
                                    title: 'New Courses!',
                                    author: 'Ina',
                                    date: '10/8/2019',
                                    body: 'Hey, Dream Equal! Blah blah blah'
                                },
                                {
                                    title: 'New Coursess!',
                                    author: 'Ina',
                                    date: '10/8/2019',
                                    body: 'Hey, Dream Equal! Blah blah blah'
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