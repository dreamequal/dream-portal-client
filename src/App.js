import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Navbar, { NavbarAlignments } from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import Training from './pages/Training/Training';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

function App() {
    const tree = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Training',
            link: '/training'
        },
        {
            title: 'Resources',
            link: '/resources'
        },
        {
            title: 'My Account',
            align: NavbarAlignments.RIGHT,
            tree: [
                {
                    title: 'Profile',
                    link: '/user/123'
                },
                {
                    title: 'Settings',
                    link: '/settings'
                }
            ]
        }
    ];

    return (
        <Router>
            <Navbar
                logo="/logo.png"
                tree={tree}
            />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/training">
                    <Training />
                </Route>
                <Route path="/resources">
                    <Resources />
                </Route>
                <Route
                    path="/user/:username"
                    render={(props) => (
                        <Profile {...props} />
                    )}
                />
                <Route path="/settings">
                    <Settings />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
