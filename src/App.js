import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { useAuth0 } from "./utils/react-auth0-spa";
import PrivateRoute from "./components/Navigation/PrivateRoute/PrivateRoute";

import Navbar, { NavbarAlignments } from './components/Navigation/Navbar/Navbar';

/**
 * Pages
 */
import Landing from './pages/Landing/Landing';
import Feed from './pages/Feed/Feed';
import Resources from './pages/Resources/Resources';
import Training from './pages/Training/Training';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

function App() {
    const { loading, isAuthenticated } = useAuth0();

    const tree = [
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
                    link: '/profile'
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
                tree={isAuthenticated ? tree : []}
                dark
            />
            <Switch>
                <Route exact path="/">
                    { isAuthenticated
                        ? <Feed />
                        : <Landing />
                    }
                </Route>
                <PrivateRoute path="/training" component={Training}/>
                <PrivateRoute path="/resources" component={Resources}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/settings" component={Settings}/>
            </Switch>
        </Router>
    );
}

export default App;
