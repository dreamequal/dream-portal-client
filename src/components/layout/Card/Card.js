import React from "react";
import classnames from "classnames";

export const Alignments = {
    CENTER: "center"
}

const Card = ({
    children,
    align,
}) => {
    const classNames = classnames("card", "hover-shadow-lg", "mb-0", {
        "text-center": align === Alignments.CENTER,
    });

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

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