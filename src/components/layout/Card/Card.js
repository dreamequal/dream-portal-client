import React from "react";

const Card = ({
    children,
}) => (
    <div className="card hover-shadow-lg hover-translate-y-n10">
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