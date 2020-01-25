import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clasnames from "classnames";

/**
 * Alignment of item in tree
 */
export const NavbarAlignments = {
    LEFT: "left",
    RIGHT: "right",
};

const NavbarItem = ({
    title,
    link,
    onClick,
}) => (
    <li className="nav-item" key={title}>
        {link ? (
            <Link className="nav-link" to={link}>
                {title}
            </Link>
        ) : (
            <button className="btn btn-link nav-link" onClick={onClick}>
                {title}
            </button>
        )}
    </li>
);

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
};

const Navbar = ({
    logo,
    tree,
    dark,
}) => {
    const _renderMenuItems = (tree) => {
        const leftItems = tree.filter(item => !item.align || item.align === NavbarAlignments.LEFT);
        const rightItems = tree.filter(item => item.align === NavbarAlignments.RIGHT);

        return (
            <>
                <ul className="navbar-nav mr-auto">
                    {leftItems.map(({title, link, onClick}) => (
                        <NavbarItem
                            key={title}
                            title={title}
                            link={link}
                            onClick={onClick}
                        />
                    ))}
                </ul>
                <ul className="navbar-nav">
                    {rightItems.map(({title, link, onClick}) => (
                        <NavbarItem
                            key={title}
                            title={title}
                            link={link}
                            onClick={onClick}
                        />
                    ))}
                </ul>
            </>
        );
    };

    const classNames = clasnames("navbar", "navbar-expand-lg", {
        "navbar-dark": dark,
        "bg-primary": dark,
    });

    return (
        <nav className={classNames}>
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

Navbar.propTypes = {
    tree: PropTypes.array,
}

Navbar.defaultProps = {
    tree: [],
};

export default Navbar;