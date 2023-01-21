import React from "react";
import Intro from "../components/Intro";
import Card from "../components/Card"
import { useParams, Navigate } from "react-router-dom";

function Project() {

    const { projectId } = useParams();

    if (projectId !== "1") {
        return <Navigate to="/" />
    }

    return (
        <>
            <h1>{projectId}</h1>
            <Intro />
            <Card />
        </>
    );
}

export default Project;
