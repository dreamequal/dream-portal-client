import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

/**
 * Align Items Options
 */
export const AlignItemsOptions = {
    START: "start",
    CENTER: "center",
    END: "end",
};

/**
 * Justify Options
 */
export const JustifyOptions = {
    START: "start",
    CENTER: "center",
    END: "end",
};

const FlexRow = ({
    children,
    className,
    justifyContent,
    alignItems,
}) => {
    const classNames = classnames("d-flex", className, {
        // Justify
        "justify-content-start": justifyContent === JustifyOptions.START,
        "justify-content-center": justifyContent === JustifyOptions.CENTER,
        "justify-content-end": justifyContent === JustifyOptions.END,
         // Align Items
         "align-items-start": alignItems === AlignItemsOptions.START,
         "align-items-center": alignItems === AlignItemsOptions.CENTER,
         "align-items-end": alignItems === AlignItemsOptions.END,
    });

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

FlexRow.propTypes = {
    className: PropTypes.string,
    alignItems: PropTypes.oneOf(Object.values(AlignItemsOptions)),
    justifyContent: PropTypes.oneOf(Object.values(JustifyOptions)),
};

export default FlexRow;