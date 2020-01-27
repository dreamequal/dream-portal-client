import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    fetchResources,
    createResource,
    resetCreateResource
} from "../../stores/Resource/ResourceEffects";
import { fetchCategories } from "../../stores/ResourceCategory/ResourceCategoryEffects";
import { fetchUser } from "../../stores/User/UserEffects";

import { getToken } from "../../utils/profile";

import Icon from "../../components/general/Icon/Icon";
import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Modal from "../../components/general/Modal/Modal";
import Alert, { Types as AlertTypes } from "../../components/general/Alert/Alert";

const UploadResourceModal = ({
    onClose,
    onResourceCreateSuccess,
}) => {
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [fileValue, setFileValue] = useState();

    const categories = useSelector(state => state.resourceCategories.categories);
    const createResourceSuccess = useSelector(state => state.resources.create.success);
    const formErrors = useSelector(state => state.resources.create.formErrors);

    const dispatch = useDispatch();

    useEffect(() => {
        if (createResourceSuccess) {
            onResourceCreateSuccess();
            dispatch(resetCreateResource());
            onClose();
        }
    }, [dispatch, createResourceSuccess, onResourceCreateSuccess, onClose]);

    useEffect(() => {
        dispatch(fetchResources(getToken(), 100));
        dispatch(fetchCategories(getToken()));
    }, [dispatch]);

    useEffect(() => {
        setCategoryValue(categories[0] && categories[0]._id);
    }, [dispatch, categories]);

    const handleSubmit = () => {
        const formFields = {
            title: titleValue,
            description: descriptionValue,
            category: categoryValue,
        };

        dispatch(createResource(getToken(), formFields, fileValue));
    };

    const handleOnClose = () => {
        dispatch(resetCreateResource());
        onClose();
    }

    return (
        <Modal
            title="Upload Resource"
            actionText="Upload Resource"
            onClose={handleOnClose}
            onAction={handleSubmit}
        >
            { formErrors &&
                Object.entries(formErrors).map((error) =>
                    <Alert key={error[0]} type={AlertTypes.ERROR} text={error[1].message}/>
                )
            }
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
                    {
                        categories.map(category => (
                            <option
                                key={category._id}
                                value={category._id}
                            >
                                {category.title}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <input
                    type="file"
                    name="file[]"
                    id="file"
                    className="custom-input-file custom-input-file"
                    onChange={(e) => setFileValue(e.target.files[0])}
                />
                <label htmlFor="file">
                    <Icon name="upload"/>
                    <span>
                        {
                            fileValue ? fileValue.name : "Choose a file…"
                        }
                    </span>
                </label>
            </div>
        </Modal>
    )
}

const ExtensionIcon = ({
    extension
}) => {
    switch (extension) {
        case ".png":
            return <Icon name="file-image"/>
        default:
            return <Icon name="file"/>
    };
}

const ResourceCard = ({
    title,
    extension,
    description,
    filePath
}) => (
    <Column size={ColumnSizes.THREE} className="mb-4">
        <Card className="h-100">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-info text-white">
                <ExtensionIcon
                    extension={extension}
                />
            </span>
            <CardBody>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className="text-center">
                    <a
                        href={filePath}
                        download={`${title}${extension}`}
                        type="button"
                        className="btn btn-secondary rounded-circle btn-icon-only"
                    >
                        <span className="btn-inner--icon">
                            <Icon name="arrow-down"/>
                        </span>
                    </a>
                </div>
            </CardBody>
        </Card>
    </Column>
);

const ResourcesPage = () => {
    const [uploadModalOpen, setUploadModalOpen] = useState(false);

    const fetchResourcesLoading = useSelector(state => state.resources.fetch.loading);
    const user = useSelector(state => state.user.profile);
    const resources = useSelector(state => state.resources.resources);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResources(getToken(), 100));
        dispatch(fetchUser(getToken()));
    }, [dispatch]);

    const reloadResources = () => {
        dispatch(fetchResources(getToken(), 100));
    };

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
                        onClose={() => setUploadModalOpen(false)}
                        onResourceCreateSuccess={reloadResources}
                    />
                )}

                { user.permissions > 1 &&
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
                }

                { fetchResourcesLoading &&
                    <Row>
                        <Column size={ColumnSizes.TWELVE}>
                            <div className="text-center">
                                <div className="spinner-grow" role="status"></div>
                            </div>
                        </Column>
                    </Row>
                }

                { !fetchResourcesLoading &&
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
                                        <ResourceCard
                                            key={resource._id}
                                            title={resource.title}
                                            extension={resource.extension}
                                            description={resource.description}
                                            filePath={resource.filePath}
                                        />
                                    ))
                                }
                            </Row>
                        </div>
                    ))
                }

                { resources.length === 0 &&
                    <Row>
                        <Column size={ColumnSizes.TWELVE}>
                            <p className="text-muted text-center">
                                No resources yet!
                            </p>
                        </Column>
                    </Row>
                }
            </Container>
        </>
    );
};

export default ResourcesPage;