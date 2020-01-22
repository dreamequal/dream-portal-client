import React from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PrivateRoute from "./components/navigation/PrivateRoute/PrivateRoute";

import Navbar, { NavbarAlignments } from "./components/navigation/Navbar/Navbar";

/**
 * Pages
 */
import Landing from "./pages/Landing/Landing";
import Feed from "./pages/Feed/Feed";
import Resources from "./pages/Resources/Resources";
import Training from "./pages/Training/Training";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Signup from "./pages/Signup/Signup";

function App() {
    const isLoading = useSelector(state => state.user.isLoading);
    const isAuthenticated = true;

    const logout = () => {
        console.log("Logout");
    }

    const tree = [
        ...(isAuthenticated ? [{
            title: "Resources",
            link: "/resources"
        }] : []),
        ...(isAuthenticated ? [{
            title: "Profile",
            link: "/profile",
            align: NavbarAlignments.RIGHT
        }] : []),
        ...(isAuthenticated ? [{
            title: "Settings",
            link: "/settings",
            align: NavbarAlignments.RIGHT
        }] : []),
        ...(!isAuthenticated ? [{
            title: "Log In",
            link: "/login",
            align: NavbarAlignments.RIGHT,
        }] : []),
        ...(!isAuthenticated ? [{
            title: "Sign Up",
            link: "/signup",
            align: NavbarAlignments.RIGHT,
        }] : []),
        ...(isAuthenticated ? [{
            title: "Log Out",
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
