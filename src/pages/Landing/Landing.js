import React from "react";

import Hero from "../../components/layout/Hero/Hero";
import Container from "../../components/layout/Container/Container";
import Row, { Column, ColumnSizes } from "../../components/layout/Row/Row";

const Landing = () => {
    return [
        <Hero>
            <div className="pt-lg text-center">
                <h2 className="h1 text-white mb-3">
                    Dream Equal <span className="text-info">Portal</span>
                </h2>
                <p className="lead text-white">
                    Find resources, connect with members, & view announcements.
                </p>
              </div>
        </Hero>,
        <Container>
            <Row>
                <Column size={ColumnSizes.TWELVE}>
                    <h1>asf</h1>
                </Column>
            </Row>
        </Container>
    ];
};

export default Landing;