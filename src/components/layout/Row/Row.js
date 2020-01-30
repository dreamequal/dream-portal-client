import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Column, { ColumnSizes } from "./Column/Column";

export const BottomSpacing = {
    SM: "sm",
    LG: "lg",
};

const Row = ({
    children,
    bottomSpacing,
}) => {
    const classNames = classnames("row", {
        // BottomSpacing
        "mb-4": bottomSpacing === BottomSpacing.SM,
        "mb-5": bottomSpacing === BottomSpacing.LG,
    })
    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

Row.propTypes = {
    bottomSpacing: PropTypes.oneOf(Object.values(BottomSpacing)),
};

Row.defaultProps = {
    bottomSpacing: BottomSpacing.LG,
};

export default Row;
export { Column, ColumnSizes };