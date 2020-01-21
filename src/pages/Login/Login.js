import React, { Component } from 'react';

import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

class LoginPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Column size={ColumnSizes.TWELVE}>
                        <div style={{maxWidth: '300px', margin: 'auto'}}>
                            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                            <label for="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required="" autofocus=""/>

                            <label for="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required=""/>

                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                        </div>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;