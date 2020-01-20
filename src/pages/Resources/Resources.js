import React, { useState } from 'react';

import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import Card, { CardBody, CardFooter } from "../../components/layout/Card/Card";
import Modal from "../../components/general/Modal/Modal";

const UploadResourceForm = () => [
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Title"/>
    </div>,
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Brief description"/>
    </div>,
    <div class="form-group">
        <select class="custom-select">
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>,
    <div class="form-group">
        <input type="file" name="file-2[]" id="file-2" class="custom-input-file custom-input-file" data-multiple-caption="{count} files selected" multiple />
        <label for="file-2">
            <i class="fa fa-upload"></i>
            <span>Choose a file…</span>
        </label>
    </div>
];

const Resources = () => {
    const [uploadModalOpen, setUploadModalOpen] = useState(false);

    return [
        <Hero>
            <div className="container">
                <span className="h1 mb-0 text-white d-block">
                    Resources
                </span>
                <p className="text-white mt-1">
                    Files, documents, and downloads for your Chapter.
                </p>
            </div>
        </Hero>,
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
                            <i className="fas fa-upload"></i>
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

            <Row>
                <Column size={ColumnSizes.THREE}>
                    <Card>
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-info text-white">
                            <i className="fas fa-file-image"></i>
                        </span>
                        <CardBody>
                            <h5>Logo Pack</h5>
                            <p>This is some text that is a description for this resource.</p>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary rounded-circle btn-icon-only">
                                    <span className="btn-inner--icon">
                                        <i className="fas fa-arrow-down"></i>
                                    </span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Column>
                <Column size={ColumnSizes.THREE}>
                    <Card>
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-info text-white">
                            <i className="fas fa-file"></i>
                        </span>
                        <CardBody>
                            <h5>Styleguide</h5>
                            <p>Documentation on our colors and fonts.</p>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary rounded-circle btn-icon-only">
                                    <span className="btn-inner--icon">
                                        <i className="fas fa-arrow-down"></i>
                                    </span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Column>
            </Row>
        </Container>
    ];
};

export default Resources;