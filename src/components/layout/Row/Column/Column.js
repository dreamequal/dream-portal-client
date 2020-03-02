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

export const Column = ({
    size,
    children,
    className,
}) => {
    const classNames = classnames(
        className,
        "col-xs-1",
        {
            "col-md-1": size === ColumnSizes.ONE,
            "col-md-2": size === ColumnSizes.TWO,
            "col-md-3": size === ColumnSizes.THREE,
            "col-md-4": size === ColumnSizes.FOUR,
            "col-md-5": size === ColumnSizes.FIVE,
            "col-md-6": size === ColumnSizes.SIX,
            "col-md-7": size === ColumnSizes.SEVEN,
            "col-md-8": size === ColumnSizes.EIGHT,
            "col-md-9": size === ColumnSizes.NINE,
            "col-md-10": size === ColumnSizes.TEN,
            "col-md-11": size === ColumnSizes.ELEVEN,
            "col-md-12": size === ColumnSizes.TWELVE,
        },
    );

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

Column.propTypes = {
    size: PropTypes.oneOf(Object.values(ColumnSizes)),
    className: PropTypes.string,
}

export default Column;