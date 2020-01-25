import React from "react";
import PropTypes from "prop-types";

import Container from "../../layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../layout/Row/Row";

const Footer = ({

}) => (
    <Container>
        <Row>
            <Column size={ColumnSizes.TWELVE}>
                <div className="d-flex justify-content-between">
                    <p className="text-muted">&copy; Dream Equal 2020</p>
                    <p className="text-muted">
                        Made by <a href="http://noahbuscher.com">Noah</a>
                    </p>
                </div>
            </Column>
        </Row>
    </Container>
);

export default Footer;