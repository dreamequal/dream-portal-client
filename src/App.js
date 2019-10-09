import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';

function App() {
    const tree = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Resources',
            link: '/resources'
        }
    ];

    return (
        <Router>
            <Navbar
                logo="./logo.png"
                tree={tree}
            />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/resources">
                    <Resources />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
