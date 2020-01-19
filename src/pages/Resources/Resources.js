import React, { useState } from 'react';

import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Modal from "../../components/general/Modal/Modal";

const UploadResourceForm = () => [
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Title"/>
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
            <button
                className="btn btn-primary rounded-pill btn-icon"
                onClick={() => setUploadModalOpen(true)}
            >
                <span class="btn-inner--icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="btn-inner--text">Upload Resource</span>
            </button>
            { uploadModalOpen && (
                <Modal
                    title="Upload Resource"
                    actionText="Upload Resource"
                    onClose={() => setUploadModalOpen(false)}
                    onAction={() => setUploadModalOpen(false)}
                >
                    {UploadResourceForm()}
                </Modal>
            ) }
        </Container>
    ];
};

export default Resources;