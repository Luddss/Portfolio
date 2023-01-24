import React from "react";
import ProjectIntro from "../components/ProjectIntro";
import ProjectPresentation from "../components/ProjectPresentation";

function Running_App() {
    return (
        <>
            <ProjectPresentation
                title="Route Finder"
                subtitle="UI|UI concept project - Running App"
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
        </>
    );
}

export default Running_App;
