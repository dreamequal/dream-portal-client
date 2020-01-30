import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Alignments = {
    CENTER: "center"
}

export const Types = {
    INFO: "info",
    WARNING: "warning",
}

const Card = ({
    children,
    align,
    type,
    className,
}) => {
    const classNames = classnames("card", className, {
        "text-center": align === Alignments.CENTER,
        "bg-info": type === Types.INFO,
        "bg-warning": type === Types.WARNING,
    });

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

Card.propTypes = {
    align: PropTypes.oneOf(Object.values(Alignments)),
    type: PropTypes.oneOf(Object.values(Types)),
    className: PropTypes.string,
};

export const CardHeader = ({
    children,
}) => (
    <div className="card-header">
        {children}
    </div>
);

export const CardBody = ({
    children,
}) => (
    <div className="card-body">
        {children}
    </div>
);

export const CardFooter = ({
    children,
}) => (
    <div className="card-footer">
        {children}
    </div>
);

export default Card;