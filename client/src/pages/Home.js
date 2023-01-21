import React from "react";
import Intro from "../components/Intro";
import Card from "../components/Card"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Home() {
    return (
        <div>
            <div css={css `
                text-align: left; 
                margin-top: -55px;
                @media only screen and (min-width: 768px) {
                    text-align: center;     
                }
            `}>
                <h2>Ludvig Andersson</h2>
                <p css={css `color: grey; margin: 0px;`}>UX|UI designer & Front-end developer</p>
            </div>

            <Intro />
            <Container fluid className="p-0" css={css `margin-top: 50px;`}>
                <Row className="gx-6 gy-4">
                    <Col xs={12} md={6}  lg={6} xl={6}><Card url={1}/></Col>
                    <Col xs={12} md={6}  lg={6} xl={6}><Card /></Col>
                    <Col xs={12} md={6}  lg={6} xl={6}><Card /></Col>
                    <Col xs={12} md={6}  lg={6} xl={6}><Card /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
