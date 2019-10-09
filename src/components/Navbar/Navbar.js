import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
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
                    <ul className="navbar-nav">
                        {tree.map((page) => (
                            <li className="nav-item" key={page.title}>
                                <Link
                                    className="nav-link"
                                    to={page.link}
                                >
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
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