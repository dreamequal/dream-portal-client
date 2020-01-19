import React, { Component } from 'react';

import Hero from "../../components/layout/Hero/Hero";

const Resources = () => {
    return (
        <Hero>
            <div className="container">
                <span className="h1 mb-0 text-white d-block">
                    Resources
                </span>
                <p className="text-white mt-1">
                    Files, documents, and downloads for your Chapter.
                </p>
            </div>
        </Hero>
    );
}

export default Resources;