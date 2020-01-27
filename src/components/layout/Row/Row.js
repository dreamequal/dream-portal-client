import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const ColumnSizes = {
    ONE: "one",
    TWO: "two",
    THREE: "three",
    FOUR: "four",
    FIVE: "five",
    SIX: "six",
    SEVEN: "seven",
    EIGHT: "eight",
    NINE: "nine",
    TEN: "ten",
    ELEVEN: "eleven",
    TWELVE: "twelve",
};

const Row = ({
    children,
    noMargin
}) => (
    <div className={classnames("row", { "mb-5": !noMargin, "mb-4": noMargin })}>
        {children}
    </div>
);

Row.propTypes = {
    noMargin: PropTypes.bool,
};

Row.defaultProps = {
    noMargin: false,
};

export const Column = ({
    size,
    children,
}) => {
    const classNames = classnames({
        "col-1": size === ColumnSizes.ONE,
        "col-2": size === ColumnSizes.TWO,
        "col-3": size === ColumnSizes.THREE,
        "col-4": size === ColumnSizes.FOUR,
        "col-5": size === ColumnSizes.FIVE,
        "col-6": size === ColumnSizes.SIX,
        "col-7": size === ColumnSizes.SEVEN,
        "col-8": size === ColumnSizes.EIGHT,
        "col-9": size === ColumnSizes.NINE,
        "col-10": size === ColumnSizes.TEN,
        "col-11": size === ColumnSizes.ELEVEN,
        "col-12": size === ColumnSizes.TWELVE,
    });

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default Row;