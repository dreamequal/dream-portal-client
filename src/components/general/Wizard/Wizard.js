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
    const isLastStep = step === React.Children.count(children) - 1;
    const canStep = React.Children.toArray(children)[step].props.canStep;

    const handleContinue = () => {
        if (isLastStep) {
            onComplete();
        } else {
            const stepTo = React.Children.toArray(children)[step].props.stepTo || step + 1;
            onStep(stepTo);
        }
    };

    return (
        <Modal
            title={title}
            onClose={onClose}
            onAction={handleContinue}
            actionText={isLastStep ? completeText : stepText}
            actionDisabled={!canStep}
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
    children,
    canStep,
    stepTo,
}) => (
    <div>
        {children}
    </div>
);

Step.propTypes = {
    canStep: PropTypes.bool,
    stepTo: PropTypes.number,
};

Step.defaultProps = {
    canStep: true,
};

export default Wizard;