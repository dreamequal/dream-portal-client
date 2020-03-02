import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import FormGroup from "components/layout/FormGroup/FormGroup";

const Dropdown = ({
    error,
    label,
    onChange,
    options,
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
            <select
                type="date"
                className={inputClassNames}
                value={value}
                onChange={onChange}
            >
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </FormGroup>
    );
};

Dropdown.propTypes = {
    error: PropTypes.bool,
    label: PropTypes.node,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
    value: PropTypes.string,
};

Dropdown.defaultProps = {
    options: [],
};

export default Dropdown;