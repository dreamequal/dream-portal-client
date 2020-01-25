import React from "react";
import classnames from "classnames";

const Container = ({
    children,
    classNames
}) => (
    <div className={classnames("container", "mt-5", classNames)}>
        {children}
    </div>
);

export default Container;