import React from "react";
import PropTypes from "prop-types";

import Card, { CardBody, CardFooter } from "../../components/layout/Card/Card";

const Composer = ({
    placeholder,
    submitText,
    rows,
    value,
    onValueChange,
    onSubmitClick,
}) => {
    const handleValueChange = (event) => {
        onValueChange(event.target.value, event);
    };

    return (
        <Card>
            <CardBody>
                <textarea
                    className="form-control"
                    placeholder={placeholder}
                    onChange={handleValueChange}
                    value={value}
                    rows={rows}
                    resize="none"
                >
                </textarea>
            </CardBody>
            <CardFooter>
                <div className="text-right">
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={onSubmitClick}
                    >
                        {submitText}
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
};

Composer.propTypes = {
    placeholder: PropTypes.string,
    submitText: PropTypes.string.isRequired,
    rows: PropTypes.number,
    value: PropTypes.string,
    onValueChange: PropTypes.func,
    onSubmitClick: PropTypes.func,
};

Composer.defaultProps = {
    rows: 3,
};

export default Composer;