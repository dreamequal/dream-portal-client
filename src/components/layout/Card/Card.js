import React from "react";

const Card = ({
    children,
}) => (
    <div class="card hover-shadow-lg hover-translate-y-n10">
        {children}
    </div>
);

export const CardBody = ({
    children,
}) => (
    <div class="card-body text-center">
        {children}
    </div>
);

export const CardFooter = ({
    children,
}) => (
    <div class="card-footer">
        {children}
    </div>
);

export default Card;