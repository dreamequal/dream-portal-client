import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import FormGroup from "components/layout/FormGroup/FormGroup";

const DatePicker = ({
    error,
    label,
    onChange,
    value,
}) => {
    const inputClassNames = classnames("form-control", {
        "is-invalid": error,
    });

    return (
        <FormGroup>
            {label ? (
                <label className="form-control-label">{label}</label>
            ) : null}
            <input
                type="date"
                className={inputClassNames}
                value={value}
                onChange={onChange}
            ></input>
        </FormGroup>
    );
};

DatePicker.propTypes = {
    error: PropTypes.bool,
    label: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default DatePicker;