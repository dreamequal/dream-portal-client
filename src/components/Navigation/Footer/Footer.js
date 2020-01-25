import React from "react";

import Container from "../../layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../layout/Row/Row";

const Footer = () => (
    <div className="mt-5">
        <Container>
            <Row>
                <Column size={ColumnSizes.TWELVE}>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted">&copy; Dream Equal 2020</p>
                        <p className="text-muted">
                            Made by&nbsp;
                            <a
                                href="http://noahbuscher.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >Noah</a>
                        </p>
                    </div>
                </Column>
            </Row>
        </Container>
    </div>
);

export default Footer;