import React, { useState } from "react";
import { Link } from "react-router-dom";

import Icon from "../../components/general/Icon/Icon";
import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Modal from "../../components/general/Modal/Modal";

const UploadResourceForm = () => [
    <div className="form-group">
        <input type="text" className="form-control" placeholder="Title"/>
    </div>,
    <div className="form-group">
        <input type="text" className="form-control" placeholder="Brief description"/>
    </div>,
    <div className="form-group">
        <select className="custom-select">
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>,
    <div className="form-group">
        <input type="file" name="file-2[]" id="file-2" className="custom-input-file custom-input-file" data-multiple-caption="{count} files selected" multiple />
        <label for="file-2">
            <Icon name="upload"/>
            <span>Choose a file…</span>
        </label>
    </div>
];

const ResourcesPage = () => {
    const [uploadModalOpen, setUploadModalOpen] = useState(false);

    return (
        <>
            <Hero>
                <span className="h1 mb-0 text-white d-block">
                    Resources
                </span>
                <p className="text-white mt-1">
                    Files, documents, and downloads for your Chapter.
                </p>
            </Hero>
            <Container>
                {uploadModalOpen && (
                    <Modal
                        title="Upload Resource"
                        actionText="Upload Resource"
                        onClose={() => setUploadModalOpen(false)}
                        onAction={() => setUploadModalOpen(false)}
                    >
                        {UploadResourceForm()}
                    </Modal>
                )}

                <Row>
                    <Column size={ColumnSizes.TWELVE}>
                        <button
                            className="btn btn-primary rounded-pill btn-icon"
                            onClick={() => setUploadModalOpen(true)}
                        >
                            <span className="btn-inner--icon">
                                <Icon name="upload"/>
                            </span>
                            <span className="btn-inner--text">Upload Resource</span>
                        </button>
                    </Column>
                </Row>

                <Row>
                    <Column size={ColumnSizes.TWELVE}>
                        <h3 className="text-muted">Branding Information</h3>
                    </Column>
                </Row>

                <Row noMargin>
                    <Column size={ColumnSizes.THREE}>
                        <Card className="h-100">
                            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-info text-white">
                                <Icon name="file-image"/>
                            </span>
                            <CardBody>
                                <h5>Logo Pack</h5>
                                <p>This is some text that is a description for this resource.</p>
                                <div className="text-center">
                                    <button type="button" className="btn btn-secondary rounded-circle btn-icon-only">
                                        <span className="btn-inner--icon">
                                            <Icon name="arrow-down"/>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-danger rounded-circle btn-icon-only">
                                        <span className="btn-inner--icon">
                                            <Icon name="trash-alt"/>
                                        </span>
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Column>
                </Row>
                <Row>
                    <Column size={ColumnSizes.TWELVE}>
                        <div className="text-right">
                            <Link className="btn btn-secondary btn-small">
                                Load More
                            </Link>
                        </div>
                    </Column>
                </Row>
            </Container>
        </>
    );
};

export default ResourcesPage;