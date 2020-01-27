import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({
    children,
    onClose,
    onAction,
    actionText,
    actionDisabled,
    title,
}) => ReactDOM.createPortal((
        <div style={{
            background: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            <div className="modal" style={{ display: "block" }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button
                                type="button"
                                className="close"
                                aria-label="Close"
                                onClick={onClose}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            { onAction && actionText && (
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={onAction}
                                    disabled={actionDisabled}
                                >
                                    {actionText}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    document.getElementById("modal-root")
);

Modal.propTypes = {
    actionText: PropTypes.string,
    actionDisabled: PropTypes.bool,
    onAction: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Modal;