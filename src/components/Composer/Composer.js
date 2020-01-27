import React, { useState } from "react";
import PropTypes from "prop-types";

import Card, { CardBody, CardFooter } from "../../components/layout/Card/Card";
import Modal from "../../components/general/Modal/Modal";

const Composer = ({
    placeholder,
    submitText,
    rows,
    value,
    confirmSubmit,
    onValueChange,
    onSubmitClick,
}) => {
    const [ confirmModalOpen, setConfirmModalOpen ] = useState(false);

    const handleSubmitClick = (e) => {
        if (confirmSubmit) {
            setConfirmModalOpen(true);
        } else {
            onSubmitClick(e);
        }
    };

    const handleModalSubmitClick = (e) => {
        setConfirmModalOpen(false);
        onSubmitClick(e);
    };

    const handleValueChange = (event) => {
        onValueChange(event.target.value, event);
    };

    return (
        <>
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
                            onClick={handleSubmitClick}
                        >
                            {submitText}
                        </button>
                    </div>
                </CardFooter>
            </Card>
            {confirmModalOpen && (
                <Modal
                    title="Confirm"
                    actionText="Post"
                    onClose={() => setConfirmModalOpen(false)}
                    onAction={handleModalSubmitClick}
                >
                    Are you sure you want to post this announcement?
                </Modal>
            )}
        </>
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