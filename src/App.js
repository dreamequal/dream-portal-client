import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { useAuth0 } from "./utils/react-auth0-spa";
import PrivateRoute from "./components/navigation/PrivateRoute/PrivateRoute";

import Navbar, { NavbarAlignments } from './components/navigation/Navbar/Navbar';

/**
 * Pages
 */
import Landing from './pages/Landing/Landing';
import Feed from './pages/Feed/Feed';
import Resources from './pages/Resources/Resources';
import Training from './pages/Training/Training';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Signup from './pages/Signup/Signup';

function App() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const tree = [
        ...(isAuthenticated ? [{
            title: 'Resources',
            link: '/resources'
        }] : []),
        ...(isAuthenticated ? [{
            title: 'Profile',
            link: '/profile',
            align: NavbarAlignments.RIGHT
        }] : []),
        ...(isAuthenticated ? [{
            title: 'Settings',
            link: '/settings',
            align: NavbarAlignments.RIGHT
        }] : []),
        ...(!isAuthenticated ? [{
            title: 'Log In',
            onClick: () => loginWithRedirect({}),
            align: NavbarAlignments.RIGHT,
        }] : []),
        ...(!isAuthenticated ? [{
            title: 'Sign Up',
            link: '/signup',
            align: NavbarAlignments.RIGHT,
        }] : []),
        ...(isAuthenticated ? [{
            title: 'Log Out',
            onClick: () => logout(),
            align: NavbarAlignments.RIGHT,
        }] : []),
    ];

    return (
        <Router>
            <Navbar
                logo="/logo.png"
                tree={tree}
                dark
            />
            <Switch>
                <Route exact path="/">
                    { isAuthenticated
                        ? <Feed />
                        : <Landing />
                    }
                </Route>
                <Route path="/signup">
                    <Signup/>
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
