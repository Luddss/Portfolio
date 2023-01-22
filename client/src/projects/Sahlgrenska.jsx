import React from "react";
import ProjectIntro from "../components/ProjectIntro";
import ProjectPresentation from "../components/ProjectPresentation";


function Sahlgrenska() {
    return (
        <>
            <ProjectPresentation />
            <ProjectIntro
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
        </>
    );
}

export default Sahlgrenska;
