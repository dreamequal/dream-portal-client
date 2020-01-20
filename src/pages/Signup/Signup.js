import React, { Component } from 'react';

import Container from "../../components/layout/Container/Container";
import Card, { CardBody } from "../../components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

class Signup extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Column size={ColumnSizes.SIX}>
                        <div class="row align-items-center h-100 mr-5">
                            <div>
                                <h1 className="mb-4">
                                    <i class="fas fa-user-plus"></i> Signup
                                </h1>
                                <p>
                                    Creating an account gives you access to chapter resources,
                                    the member directory, training, & more!
                                </p>
                            </div>
                        </div>
                    </Column>
                    <Column size={ColumnSizes.SIX}>
                        <Card>
                            <CardBody>
                                <div className="form-group">
                                    <label className="form-control-label">First Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Last Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Username</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Email</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div class="text-right">
                                    <button type="button" class="btn btn-info btn-icon">
                                        <span class="btn-inner--text">Continue</span>
                                        <span class="btn-inner--icon">
                                            <i class="fas fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default Signup;