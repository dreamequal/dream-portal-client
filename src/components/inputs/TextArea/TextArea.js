import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
    placeholder,
    onChange,
    value,
    rows,
    resize,
}) => (
    <textarea
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={rows}
        resize={!resize ? "none" : null}
    >
    </textarea>
);

TextArea.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    rows: PropTypes.number,
    resize: PropTypes.bool,
};

TextArea.defaultProps = {
    rows: 3,
};

export default TextArea;