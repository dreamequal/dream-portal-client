import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchResources, createResource } from "../../stores/Resource/ResourceEffects";
import { fetchCategories } from "../../stores/ResourceCategory/ResourceCategoryEffects";

import { getToken } from "../../utils/profile";

import Icon from "../../components/general/Icon/Icon";
import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Modal from "../../components/general/Modal/Modal";

const UploadResourceModal = ({
    onClose,
}) => {
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [fileValue, setFileValue] = useState();

    const categories = useSelector(state => state.resourceCategories.categories);
    const createResourceSuccess = useSelector(state => state.resources.create.success);

    const dispatch = useDispatch();

    useEffect(() => {
        if (createResourceSuccess) {
            onClose();
        }
    }, [dispatch, createResourceSuccess, onClose]);

    useEffect(() => {
        dispatch(fetchResources(getToken(), 100));
        dispatch(fetchCategories(getToken()));
    }, [dispatch]);

    const handleSubmit = () => {
        const formFields = {
            title: titleValue,
            description: descriptionValue,
            category: categoryValue,
        };

        dispatch(createResource(getToken(), formFields, fileValue));
    };

    return (
        <Modal
            title="Upload Resource"
            actionText="Upload Resource"
            onClose={onClose}
            onAction={handleSubmit}
        >
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Brief description"
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.target.value)}
                />
            </div>
            <div className="form-group">
                <select
                    className="custom-select"
                    value={categoryValue}
                    onChange={(e) => setCategoryValue(e.target.value)}
                >
                    <option selected>Category</option>
                    {
                        categories.map(category => (
                            <option value={category._id}>{category.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <input
                    type="file"
                    name="file-2[]"
                    id="file-2"
                    className="custom-input-file custom-input-file"
                    onChange={(e) => setFileValue(e.target.files[0])}
                />
                <label for="file-2">
                    <Icon name="upload"/>
                    <span>Choose a file…</span>
                </label>
            </div>
        </Modal>
    )
}

const ResourcesPage = () => {
    const [uploadModalOpen, setUploadModalOpen] = useState(false);

    const resources = useSelector(state => state.resources.resources);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResources(getToken(), 100));
    }, [dispatch]);

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
                    <UploadResourceModal
                        onClose={() => setUploadModalOpen(false)}/>
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

                {
                    resources.map(category => (
                        <div key={category._id}>
                            <Row>
                                <Column size={ColumnSizes.TWELVE}>
                                    <h3>{category.title}</h3>
                                    <p className="lead">{category.description}</p>
                                </Column>
                            </Row>

                            <Row noMargin>
                                {
                                    category.resources.map(resource => (
                                        <Column size={ColumnSizes.THREE} key={resource._id} className="mb-4">
                                            <Card className="h-100">
                                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-info text-white">
                                                    <Icon name="file-image"/>
                                                </span>
                                                <CardBody>
                                                    <h5>{resource.title}</h5>
                                                    <p>T{resource.description}</p>
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
                                    ))
                                }
                            </Row>
                        </div>
                    ))
                }
            </Container>
        </>
    );
};

export default ResourcesPage;