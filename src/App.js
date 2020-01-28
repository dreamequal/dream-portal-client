import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConnectedRouter, push } from "connected-react-router";
import { Route, Switch , Redirect} from "react-router";
import history from "utils/history";
import PrivateRoute from "components/navigation/PrivateRoute/PrivateRoute";

import Navbar, { NavbarAlignments } from "components/navigation/Navbar/Navbar";
import Footer from "components/navigation/Footer/Footer";

import { logoutUser } from "stores/User/UserEffects";

/**
 * Pages
 */
import Landing from "pages/Landing/Landing";
import Feed from "pages/Feed/Feed";
import Resources from "pages/Resources/Resources";
import Training from "pages/Training/Training";
import Profile from "pages/Profile/Profile";
import Settings from "pages/Settings/Settings";
import Signup from "pages/Signup/Signup";
import Login from "pages/Login/Login";

const App = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(push("/"));
        }
    }, [isAuthenticated, dispatch]);

    const logout = () => {
        dispatch(logoutUser());
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
            onClick: logout,
            align: NavbarAlignments.RIGHT,
        }] : []),
    ];

    return (
        <ConnectedRouter history={history}>
            <Navbar
                logo="../logo.png"
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
                <PrivateRoute path="/training" component={Training}/>
                <PrivateRoute path="/resources" component={Resources}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/settings" component={Settings}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Redirect from="*" to="/" />
            </Switch>

            <Footer/>
        </ConnectedRouter>
    );
}

export default App;
