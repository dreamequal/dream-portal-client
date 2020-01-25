import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/layout/Hero/Hero";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";
import Card, { CardBody, Types } from "../../components/layout/Card/Card";
import Icon from "../../components/general/Icon/Icon";

const LandingPage = () => {
    return (
        <>
            <Hero>
                <div className="pt-lg text-center">
                    <h1 className="text-white mb-3">
                        Dream Equal <span className="text-info">Portal</span>
                    </h1>
                    <p className="lead text-white">
                        Find resources, connect with members, & view announcements.
                    </p>
                    <div className="d-flex d-flex justify-content-center mt-5">
                        <Link to="/signup" className="btn btn-secondary rounded-pill mr-0">
                            Create Account
                        </Link>
                        <Link to="/login" className="btn btn-link text-white">Login</Link>
                    </div>
                </div>
            </Hero>,
            <Container classNames="w-50">
                <div className="slice slice-md">
                    <Row>
                        <Column size={ColumnSizes.TWELVE}>
                            <div className="text-center mx-auto w-75 text-center">
                                <h2>The change starts here.</h2>
                                <p className="lead">
                                    Signing up for the Dream Portal supercharges your
                                    Dream Equal path to equality with some pretty amazing features.
                                </p>
                            </div>
                        </Column>
                    </Row>
                </div>
                <div className="slice slice-md">
                    <Row>
                        <Column size={ColumnSizes.EIGHT}>
                            <h3>Earn acheivements</h3>
                            <p>
                                Get acheivements for completing goals on the Portal! These will be
                                displayed on your profile and to your Chapter leads.
                            </p>
                        </Column>
                        <Column size={ColumnSizes.FOUR}>
                            <Card type={Types.WARNING}>
                                <CardBody>
                                    <div className="d-flex">
                                        <div>
                                            <div className="icon text-white icon-sm">
                                                <Icon name="award"/>
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <span className="d-block h5 text-white mr-2 mb-1">Achievement</span>
                                            <span className="text-white">Early Adopter</span>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Column>
                    </Row>
                </div>
                <div className="slice slice-md">
                    <Row>
                        <Column size={ColumnSizes.FOUR}>
                            <ProfileCard
                                firstName="Jane"
                                lastName="Doe"
                            />
                        </Column>
                        <Column size={ColumnSizes.EIGHT}>
                            <h3>Link up</h3>
                            <p>
                                The Dream Portal allows you to connect with fellow Dream Equal members,
                                download resources for your chapter, receive important announcements,
                                & more!
                            </p>
                        </Column>
                    </Row>
                </div>
                <div className="slice slice-md">
                    <Row>
                        <Column size={ColumnSizes.EIGHT}>
                            <h3>Get updates</h3>
                            <p>
                                Get important updates from Dream Equal leaders about new events and updated
                                resources.
                            </p>
                        </Column>
                        <Column size={ColumnSizes.FOUR}>
                            <div className="text-center display-3 text-info">
                                <Icon name="bullhorn"/>
                            </div>
                        </Column>
                    </Row>
                </div>
                <div className="slice slice-md">
                    <Row>
                        <Column size={ColumnSizes.TWELVE}>
                            <div className="text-center mx-auto w-75 text-center">
                                <h2>What are you waiting for?</h2>
                                <p className="lead">
                                    Start taking advantage of these features and many more
                                    with a free Dream Portal account!
                                </p>
                                <Link to="/signup" className="btn btn-primary rounded-pill">
                                    Create Account
                                </Link>
                            </div>
                        </Column>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default LandingPage;