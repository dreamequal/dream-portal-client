import React from "react";

const Hero = ({
    children,
}) => (
    <div className="header-account-page bg-gradient-primary d-flex align-items-center">
        <div className="container">
            {children}
        </div>
    </div>
);

export default Hero;