import React, { useState } from "react";
import PropTypes from "prop-types";

import Card, { CardBody, CardFooter } from "components/layout/Card/Card";
import Modal from "components/general/Modal/Modal";
import TextArea from "components/inputs/TextArea/TextArea";
import Button, { Sizes } from "components/actions/Button/Button";
import FlexRow, { JustifyOptions } from "components/layout/FlexRow/FlexRow";

const Composer = ({
    placeholder,
    submitText,
    rows,
    value,
    confirmSubmit,
    confirmSubmitMessage,
    onValueChange,
    onSubmitClick,
}) => {
    const [ confirmModalOpen, setConfirmModalOpen ] = useState(false);

    const handleSubmitClick = (e) => {
        if (value.trim() === "") {
            return;
        } else if (confirmSubmit) {
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
                    <TextArea
                        placeholder={placeholder}
                        onChange={handleValueChange}
                        value={value}
                        rows={rows}
                        resize={false}
                    />
                </CardBody>
                <CardFooter>
                    <FlexRow justifyContent={JustifyOptions.END}>
                        <Button
                            label={submitText}
                            size={Sizes.SM}
                            onClick={handleSubmitClick}
                            disabled={value.trim() === ""}
                        />
                    </FlexRow>
                </CardFooter>
            </Card>
            {confirmModalOpen && (
                <Modal
                    title="Confirm"
                    actionText="Post"
                    onClose={() => setConfirmModalOpen(false)}
                    onAction={handleModalSubmitClick}
                >
                    {confirmSubmitMessage}
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
    confirmSubmit: PropTypes.bool,
    confirmSubmitMessage: PropTypes.node,
    onValueChange: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired,
};

Composer.defaultProps = {
    rows: 3,
};

export default Composer;