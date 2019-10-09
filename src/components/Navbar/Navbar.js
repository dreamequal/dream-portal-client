import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavbarAlignments = {
    LEFT: 'left',
    RIGHT: 'right',
};

class Navbar extends Component {
    _renderMenuItem = (page) => {
        /**
         * Check to see if dropdown
         * NOTE: Don't need some fancy recursive algo bc the most number
         * of possible nested levels is 1
         */
        if (page.tree) return this._renderDropdown(page);

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
    }

    _renderDropdown = (item) => {
        return (
            <li className="nav-item dropdown" key={item.title}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    }

    _renderMenuItems = (tree) => {
        const leftItems = tree.filter(item => {
            return !item.align || item.align === NavbarAlignments.LEFT;
        });

        const rightItems = tree.filter(item => {
            return item.align === NavbarAlignments.RIGHT;
        });

        return (
            <>
                <ul className="navbar-nav mr-auto">
                    {leftItems.map((page) => this._renderMenuItem(page))}
                </ul>
                <ul className="navbar-nav">
                    {rightItems.map((page) => this._renderMenuItem(page))}
                </ul>
            </>
        );
    };

    render() {
        const {
            logo,
            tree,
        } = this.props;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="auto" height="30" alt=""/>
                </a>

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
                    {this._renderMenuItems(tree)}
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    logo: PropTypes.string,
    tree: PropTypes.arrayOf(PropTypes.shape({})),
};

Navbar.defaultProps = {
    logo: '',
    tree: [],
}

export default Navbar;