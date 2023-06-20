import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectIntro from "../components/ProjectIntro";
import ProjectPresentation from "../components/ProjectPresentation";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Call_4_Help() {

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
                title="Call4Help"
                subtitle="UI Design at Solid Beans"
                image="Call4Help2.png"
                imgWidth='100%'
                imgHeight='100%'
            />
            <ProjectIntro
                projectTitle="Call4Help"
                reason="An app re-design as part of a larger project done at Solid Beans. 
                It is a continuation of a project developed by a few consultants spanning over roughly a year on and off. 
                The goal of the project was to reimagine the design of a functional app, without impacting the core functionality."
                context="The purpose of the Call4Help app is to be able to send alarms and get people in your vicinity to collect information when a crime or a dangerous situation is about to occur. 
                By getting bystanders to collect information, a crime or a dangerous situation can more easily be resolved."
                problem="A working concept for the app was developed by a set of consultants, but the design had up to that point not been a priority.
                As such, the next step was to improve the design of the app, without affecting the core functionality. 
                The goal was thus to give the app a redesign and find a simple and intuitive user flow."
                idea="The design needed to be simple, modern, and quick to understand. 
                The app is designed to be seldom used, and one can not rely on the user to learn how to use it over time. 
                Instead, the features need to be straightforward and the interface needs to be instantly understandable.
                The idea was to use well-known design concepts like a navbar, lists, and big and bold buttons to achieve a suitable design. 
                Whilst at the same time operating within the boundaries of what is implemented in the app already."
                role="My role within the project is divided between creating the UI design and as a project lead with responsibility for agile scrum practices."
                tools="I used various design tools within the project but created the final prototype in Figma. 
                I also spent time creating and organizing documentation within a google workplace, as well as managing a Trello board."
            />
            <div css={{ '& h3': { fontWeight: 600, margin: "20px 0" }, '& p': { color: "#6B6B6B" }, '& li': { color: "#6B6B6B" } }}>
                <h1 css={css`
                text-align: left; 
                margin-top: 30px;
                margin-bottom: 20px;
                font-weight: 600;
                @media only screen and (min-width: 768px) {
                    text-align: center;     
                    margin-top: 80px;
                    margin-bottom: 80px;
                    padding: 0 23%;
            }`}>
                    Results
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

                <p>The following views are some of the most important in the app and are needed to understand the app's purpose. 
                Additional views have been created, for example the profile view and the viewing responses to alarms. 
                But these are not as refined and are chosen not to be included.</p>
                <br/ >

                    <h3>Alarm view </h3>

                    <div css={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }}>
                        <img src={require(`../assets/images/Mockup2.png`)} alt="Alarm view"
                            css={css`
                            objectFit: contain;
                            height: auto;
                            width: 100%;
                            @media only screen and (min-width: 768px) { 
                                width: 65%;
                        }`} />
                    </div>
                    <div css={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '28px' }}>
                        <p>Initial view to send alarms in case of danger</p>
                    </div>

                    <p><b>Design insights</b></p>
                    <p>The first page must be simple. 
                    The user could have very little time to send an alarm, and any seconds needed to understand an interface could be essential.
                    I removed the drawer since it served little purpose, and gave the logo more space. 
                    I also reduced the size of the navbar to a more normal size with four clear options. 
                    The button calling for help should be the center focus, and a small text indicating its purpose is enough.
                    I also used a modern skeuomorphic design to make the button feel clickable.</p>
                    <br />

                    <h3>Reports view </h3>

                    <div css={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }}>
                        <img src={require(`../assets/images/Mockup1.png`)} alt="Report view"
                            css={css`
                            objectFit: contain;
                            height: auto;
                            width: 100%;
                            @media only screen and (min-width: 768px) { 
                                width: 65%;
                        }`} />
                    </div>
                    <div css={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '28px' }}>
                        <p>View with reports containing answers people have sent when an alarm was sent</p>
                    </div>

                    <p><b>Design insights</b></p>
                    <p>The prior view was cramped and didn't allow for easy scaling with more reports. 
                    Even though a single report should be the norm, allowing for more is important.
                    I made the report feel more like a contained unit by making a card and including essential info like location.
                    I also made the icons lightweight and easy to understand and distinguish. 
                    Clicking the report or the icons should bring up a more detailed view of the information, allowing the user to view the responses.</p>
                    <br />

                    <h3>Send a tip view</h3>

                    <div css={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }}>
                        <img src={require(`../assets/images/Mockup3.png`)} alt="Send a tip view"
                            css={css`
                            objectFit: contain;
                            height: auto;
                            width: 100%;
                            @media only screen and (min-width: 768px) { 
                                width: 65%;
                        }`} />
                    </div>
                    <div css={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '28px' }}>
                        <p>View to send a tip when an alarm is active nearby</p>
                    </div>

                    <p><b>Design insights</b></p>
                    <p>The focus on the send tips view should be easy access to the different supported tip options. 
                    Thus, utalizing the whole view with big disquinguishable buttons with simple icons was a good option. 
                    This eliminates an unnecessary step of accessing options and guides the user to send more than just text. 
                    The order of the buttons could later be determined using various user testing methods and would make the tip system quick and effective to use.</p>
                </div>
            </div>
        </>
    );
}

export default Call_4_Help;
