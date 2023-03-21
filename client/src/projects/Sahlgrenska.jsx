import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectIntro from "../components/ProjectIntro";
import ProjectPresentation from "../components/ProjectPresentation";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ImageCarousel from "../components/ImageCarousel";

function Sahlgrenska() {

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
                title="MikroLIS"
                subtitle="UX|UI Design & Frontend project at Sahlgrenska"
                image="MikroLIS.png"
                imgWidth='100%'
                imgHeight='100%'
            />
            <ProjectIntro
                projectTitle="Sahlgrenska"
                reason="Master's thesis project which later continued as a position of employment at Sahlgrenska University Hospital, totaling roughly 2 years working time. 
                Working as the main UX|UI designer on the project, together with a team of 4 devs, a project lead and two super users. 
                The role later transitioned more towards implementation and predomenently frontend."
                context="
                Sweden aims to become a global leader in digital healthcare by 2025 and is undergoing a digital transition throughout the healthcare sector to achieve this goal. 
                Sahlgrenska University Hospital, the largest hospital in Sweden, is taking a leading role in the transition and has started multiple projects to improve the whole digital experience, both for patients and workers. 
                One often overlooked segment is the laboratories. But with the increased testing load caused by the covid-19 pandemic, laboratory systems were close to capacity. 
                To solve this, a new modern system had to be developed. But with the older system having been iteratively improved over decades, knowing what to keep and what to change is no easy task. 
                But using various user-centered design methods, the right things to focus on could be identified and implemented."
                problem="When upgrading a vast and complicated system that requires expert knowledge to understand, designing an improved system is very difficult. 
                The expert users of the application require a precise and optimized workflow and can be reluctant to change the way they work. 
                The system is also crucial for work to function at the hospital, and this makes changes undesirable and could also be dangerous if implemented incorrectly."
                idea="By involving the users early and throughout the entire process, a desirable system that is fitting for their needs should be possible to create. 
                This, however, requires a large amount of time for both designers and more crucially the laboratory personal, who can not pause their daily work for too long. 
                To combat this issue, designing with proven 'best practices' within UI design and conducting user research iteratively should reduce the strain on the workers. 
                This method, together with close consultation with superusers with high system expertise, should result in a great design process."
                role="The role started as a UX|UI designer to produce a thesis presenting the best ways to improve the design of the application, predominantly from a usability standpoint, but also it's aesthetic. 
                The role later transitioned more into front-end development to implement the proposed design."
                tools="I worked with various research methods, both qualitative and quantitative. I produced a written thesis and a digital prototype in Figma. When implementing the design, I used JavaFX as the main tool."
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
                    <h3>User Involvement</h3>
                    <p>The project was user-centered, and involving the users as much possible within the project's limitations was key. Thus, many different methods were used during the project's user research phase: </p>
                    <ul>
                        <p>
                            <li>Observation</li>
                            <li>Heuristic Evaluation</li>
                            <li>User study series</li>
                            <ul>
                                <li>Semi-structured interviews</li>
                                <li>Design workshop</li>
                                <li>Swot Analysis</li>
                            </ul>
                        </p>
                    </ul>
                    <p>
                        Take a look at my theis to see exactly how each method was done.
                        I will focus on one of the most rewarding methods used, the workshop.
                    </p>
                    <br />
                    <p><b>Design Workshop</b></p>
                    <p>A fun way I used to get the users thinking was sketching the ideal system during a workshop.
                        Different laboratory departments were asked to design what they wanted features they wanted to have prioritiest in the new system.
                        They were also asked to try and come up with ways to solve pain points with the currrent system in use at the labs.</p>
                    <p>Even though most users had many pain points with the current system, moving away from its design turned out to be difficult.
                        But with the use of example components to use, most users managed to express what was most important for them in the system.</p>
                
                <img src={require(`../assets/images/Workshop.png`)} alt="Workhop material" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                <div css={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}><p>Workshop material</p></div>
            
                <h3>Analyzing the material</h3>
                <p>
                All the user research resulted in lots and lots of insights that somehow needed to be condensed into improvements for the final design. 
                I transferred all my annotations to digital sticky notes which could easily be moved around. 
                I then made use of an <b>Affinity Diagram</b> to find themes. 
                Then I got to sorting the data! 
                </p>
                <img src={require(`../assets/images/Findings.png`)} alt="User study findings" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                <div css={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '10px' }}><h3>Turned Into</h3></div>
                <img src={require(`../assets/images/Affinity.png`)} alt="Affinity Diagram" css={{ objectFit: 'contain', height: 'auto', width: '100%' }} />
                
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
                    <h3>My finding</h3>
                    <p>
                    After lots of analysing both the data and the themes from the user studies, I tried to match my analysis to general design principles.
                    I turned these into guidelines for how to effectively improve an old laboratory system and what factors to focus on when making a re-design.
                    These were my findings: 
                    </p>
                    <ul>
                        <p>
                            <li>Creating an efficient program</li>
                            <li>Easy navigation through the program</li>
                            <li>Modernizing the design</li>
                            <li>Assisted learning</li>
                            <li>Customization</li>
                            <li>Error prevention</li>
                            <li>Access to the right information</li>
                        </p>
                    </ul>
                    <p>To read more about these guidelines, take a look at the thesis. Link at the top.</p>
                    <h3>The design</h3>
                    <ImageCarousel />
                </div>
            </div>
        </>
    );
}

export default Sahlgrenska;
