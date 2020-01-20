import React from "react";

const Hero = ({
    children,
}) => (
    <div className="pt-5 pb-5 bg-primary d-flex align-items-center">
        <div className="container">
            {children}
        </div>
    </div>
);

export default Hero;