import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Container = ({
    children,
    classNames
}) => (
    <div className={classnames("container", "mt-5", classNames)}>
        {children}
    </div>
);

Container.propTypes = {
    classNames: PropTypes.string,
};

export default Container;