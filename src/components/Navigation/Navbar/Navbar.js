import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../../utils/react-auth0-spa';

export const NavbarAlignments = {
    LEFT: 'left',
    RIGHT: 'right',
};

const Navbar = ({
    logo,
    tree,
}) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const _renderMenuItem = (page) => {
        /**
         * Check to see if dropdown
         * NOTE: Don't need some fancy recursive algo bc the most number
         * of possible nested levels is 1
         */
        if (page.tree) return _renderDropdown(page);

        return (
            <li className="nav-item" key={page.title}>
                <Link
                    className="nav-link"
                    to={page.link}
                >
                    {page.title}
                </Link>
            </li>
        )
    };

    const _renderDropdown = (item) => {
        return (
            <li className="nav-item dropdown" key={item.title}>
                <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {item.title}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {item.tree.map((subItem) => {
                        return (
                            <Link
                                key={subItem.title}
                                className="dropdown-item"
                                to={subItem.link}
                            >
                                {subItem.title}
                            </Link>
                        )
                    })}
                </div>
            </li>
        )
    };

    const _renderMenuItems = (tree) => {
        const leftItems = tree.filter(item => {
            return !item.align || item.align === NavbarAlignments.LEFT;
        });

        const rightItems = tree.filter(item => {
            return item.align === NavbarAlignments.RIGHT;
        });

        return (
            <>
                <ul className="navbar-nav mr-auto">
                    {leftItems.map((page) => _renderMenuItem(page))}
                </ul>
                <ul className="navbar-nav">
                    {rightItems.map((page) => _renderMenuItem(page))}
                    {!isAuthenticated && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                onClick={() => loginWithRedirect({})}
                            >
                                Log in
                            </Link>
                        </li>
                    )}

                    {isAuthenticated && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                onClick={() => logout()}
                            >
                                Log out
                            </Link>
                        </li>
                    )}
                </ul>
            </>
        );
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <Link
                className="navbar-brand"
                to="/"
            >
                <img src={logo} width="auto" height="30" alt="Logo"/>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                {_renderMenuItems(tree)}
            </div>
        </nav>
    );
};

export default Navbar;