import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import FormGroup from "components/layout/FormGroup/FormGroup";

const TextField = ({
    error,
    label,
    onChange,
    placeholder,
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
                type="text"
                className={inputClassNames}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </FormGroup>
    );
};

TextField.propTypes = {
    error: PropTypes.bool,
    label: PropTypes.node,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export default TextField;