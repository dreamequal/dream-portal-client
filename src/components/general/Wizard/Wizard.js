import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";

const Wizard = ({
    title,
    stepText,
    completeText,
    step,
    onStep,
    onComplete,
    onClose,
    children,
}) => {
    const isLastStep = step - 1 === React.Children.count(children);

    const handleContinue = () => {
        if (isLastStep) {
            onComplete();
        } else {
            onStep();
        }
    };

    return (
        <Modal
            title={title}
            onClose={onClose}
            onAction={handleContinue}
            actionText={isLastStep ? completeText : stepText}
        >
            {React.Children.toArray(children)[step]}
        </Modal>
    );
};

Wizard.propTypes = {
    title: PropTypes.string,
    stepText: PropTypes.string,
    completeText: PropTypes.string,
    step: PropTypes.number,
    onComplete: PropTypes.func,
    onClose: PropTypes.func,
};

Wizard.defaultProps = {
    step: 0,
    stepText: "Continue",
    completeText: "Finish",
};

export const Step = ({
    children
}) => (
    <div>
        {children}
    </div>
);

export default Wizard;