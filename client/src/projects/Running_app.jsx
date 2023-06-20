import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ProjectIntro from "../components/ProjectIntro";
import ProjectPresentation from "../components/ProjectPresentation";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function RunningApp() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return (
        <>
            <ProjectPresentation
                title="Route Finder"
                subtitle="UX|UI concept project - Running App"
                image="RouteFinder.png"
                imgWidth='100%'
                imgHeight='100%'
            />
            <ProjectIntro
                projectTitle="RouteFinder"
                reason="A concept project was developed with a focus on UX and UI design, spanning over a couple of months. 
                The goal of the project was to test research methods and effectively translate them into digital prototypes."
                context=""
                problem="Finding time and energy to exercise can be difficult. 
                Taking extra time to plan a new route makes the barrier to starting even greater. 
                As a 'once a week' beginner runner myself, I often just end up taking the same boring route to at least get some training done. 
                There are some apps on the market, especially for recording runs. But these are often tailored for the experienced runner, with challenges and info that just makes the average runner scared.
                Is there a way to make an app for new runners and help them on their journey within the sport, and push them at their own pace? And is this something people would want?"
                idea="Let normal and aspering runners guide the design. 
                Extensive research on user needs and pains could eliminate unnecessary features that beginner has no use for. 
                And subsequently make room for features like finding fun new interesting routes and information about your progress compared to others just starting out on the same journey."
                role="As this was a solo project, my role spanned the entire design process, from user research to finished design. Covering all the things a UX|UI designer need to know."
                tools="Pen and paper for interviews and sketching, sticky notes for sorting ideas, Figma for prototyping, and more."
            />
            <div css={{ '& h3': { fontWeight: 600, margin: "20px 0" }, '& p': { color: "#6B6B6B" }, '& li': { color: "#6B6B6B" } }}>
                <h1 css={css`
                text-align: left; 
                margin-top: 30px;
                margin-bottom: 20px;
                font-weight: 600;
                @media only screen and (min-width: 768px) {
                    text-align: center;     
                    margin-top: 100px;
                    margin-bottom: 90px;
                    padding: 0 23%;
            }`}>
                    Methodology
                </h1>
                <div css={css`
                margin-top: 25px;
                margin-bottom: 20px;
                font-weight: 600;
                @media only screen and (min-width: 768px) {   
                    margin-top: 60px;
                    margin-bottom: 60px;
                    padding: 0 9%;
                }`}>
                    <h3>Gathering & Processing Data</h3>
                    <p>
                        A training app could include any number of things, making user research very important in a project such as this.
                        I got family and friends involved to see how they train and how technology could simplify their training.
                        I used the following methods in the project:
                    </p>
                    <ul>
                        <p>
                            <li>Observation/Field studies</li>
                            <li>Competitive analysis</li>
                            <li>Group interviews</li>
                            <li>Affinity Diagram</li>
                            <li>Personas</li>
                        </p>
                    </ul>
                    <p>
                        A goal of the research was not only to find out how people use technology as they train currently.
                        But how technology could help in ways they hadn't even thought about.
                    </p>
                    <br />
                    <p><b>Observation and Field studies</b></p>
                    <p>
                        Even an activity as straightforward as running has people doing things in different ways.
                        For example, some people look at their watch every other second to keep the right pace, whilst others run without a care in the world.
                        To find out more about how people train, I set out to join them on their normal rutine.
                    </p>
                    <p>
                        The findings from my field studies were used as a basis for asking the right questions during my interviews
                    </p>
                    <br />
                    <p><b>Competitive analysis</b></p>
                    <p>
                        The market for running apps is quite saturated.
                        Thus, to both see what current apps are doing right and what to improve upon, I did a competitive analysis.
                        I based the analysis some of the largest competitors like Strava and Runkeeper and evaluated them in different categories, similar to a SWOT analysis.
                    </p>
                    <img src={require(`../assets/images/Competative_analysis.png`)} alt="Competative analysis" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                    <div css={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}><p>Competitive Analysis diagram</p></div>
                    <br />
                    <p><b>Group interviews</b></p>
                    <p>
                        The amount of good feedback you can get from interviews is astonishing.
                        That is why I find interviews to be essential for most projects.
                        Doing interviews in groups also can also make participants more at ease and ideas can flow.
                        It is however important to organize groups to have good chemistry and as a host to make sure everyone gets their voice heard.
                    </p>
                    <p>
                        The data from the interviews were later organized using an affinity diagram and turned into personas to use during the designing phase of the project.
                        To see more about how I use affinity diagrams, check the <NavLink to={"/sahlgrenska"} css={css`text-decoration: none; color: #FF761F;  transition: 0.1s;&:hover {color: #FF761F; text-decoration:none; cursor:pointer; font-weight: 800;}`}>project from Sahlgrenska</NavLink>.
                    </p>
                    <br />
                    <p><b>Personas</b></p>
                    <p>
                        To more effectively be able to work with the data I had organized, I turned the best findings into representative personas.
                        These made-up people would be the ones I designed for, and I would continuously go back to see that <i>their preferences</i> were followed within the design.
                    </p>

                    <Container fluid className="p-0" css={css`margin-top: 30px; margin-bottom: 30px`}>
                        <Row className="gx-0 gy-0">
                            <Col xs={12} md={6} lg={6} xl={6}>
                                <img src={require(`../assets/images/Persona1.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={12} md={6} lg={6} xl={6}>
                                <img src={require(`../assets/images/Persona2.png`)} alt="Second persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={12} md={6} lg={6} xl={6}>
                                <img src={require(`../assets/images/Persona3.png`)} alt="Third persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={12} md={6} lg={6} xl={6}>
                                <img src={require(`../assets/images/Persona4.png`)} alt="Fourth persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                        </Row>
                    </Container>

                    <h1 css={css`
                        text-align: left; 
                        margin-top: 30px;
                        margin-bottom: 20px;
                        font-weight: 600;
                        @media only screen and (min-width: 768px) {
                            text-align: center;     
                            margin-top: 100px;
                            margin-bottom: 90px;
                            padding: 0 23%;
                        }`}>
                        Results
                    </h1>
                    <p>
                        Feedback on the design was gathered in stages. First with the idea, then the sketch, and finally the prototype.
                        If the concept were to be developed further, the next steps would be to start more iterations and gather more feedback.
                        The prototype could also be more interactive to help testers get a more real feeling of the app and thus give more nuanced feedback.
                    </p>
                    <p><b>Sketch</b></p>
                    <p>
                        Various sketches were done to be able to rapidly test out different ideas.
                        These sketches had different levels of completeness and covered many different views within the app.
                        The following sketches were done close to making the digital prototype.
                        Most of the concepts were refined and included in the Figma design.
                    </p>
                    <img src={require(`../assets/images/Sketch1.png`)} alt="Running app sketch"
                        css={css`
                            objectFit: contain;
                            height: auto;
                            width: 100%;
                            padding: 0 0 0 0;
                            @media only screen and (min-width: 768px) {   
                                width: 90%;
                                padding: 0 0 0 10%;
                        }`} />
                    <div css={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '30px' }}><p>Sketch displaying the home view and your training progress</p></div>
                    <img src={require(`../assets/images/Sketch2.png`)} alt="Running app sketch"
                        css={css`
                            objectFit: contain;
                            height: auto;
                            width: 100%;
                            padding: 0 0 0 0;
                            @media only screen and (min-width: 768px) {   
                                width: 90%;
                                padding: 0 0 0 10%;
                        }`} />
                    <div css={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}><p>Sketch displaying views for history, tracking runs, and rewards</p></div>
                    <h3>The design</h3>
                    <p>The final design was made in Figma and showcases screens for: </p>
                    <ul>
                        <p>
                            <li>Finding routes on the map</li>
                            <li>Selecting routes in a town</li>
                            <li>Viewing activity history</li>
                            <li>Checking statistics </li>
                            <li>Viewing personal records and awards</li>
                            <li>Starting an activity</li>
                        </p>
                    </ul>
                    <Container fluid className="p-0" css={css`margin-top: 30px; margin-bottom: 30px`}>
                        <Row className="gx-8 gy-4">
                            <Col xs={6} md={4} lg={4} xl={4}>
                                <img src={require(`../assets/images/Run2.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={6} md={4} lg={4} xl={4}>
                                <img src={require(`../assets/images/Run1.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={6} md={4} lg={4} xl={4}>
                                <img src={require(`../assets/images/Run3.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={6} md={4} lg={4} xl={4}>
                                <img src={require(`../assets/images/Run4.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={6} md={4} lg={4} xl={4}>
                                <img src={require(`../assets/images/Run5.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                            <Col xs={6} md={4} lg={4} xl={4}>
                                <img src={require(`../assets/images/Run6.png`)} alt="First persona" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default RunningApp;
