import React from "react";
import Sahlgrenska from "../projects/Sahlgrenska";
import RunningApp from "../projects/Running_app";
import UIChallenges from "../projects/UI_Challenges";
import Call4Help from "../projects/Call4Help";
import { useParams, Navigate } from "react-router-dom";

function Project() {

    const { projectId } = useParams();

    switch (projectId) {
        case 'sahlgrenska':
            return (<Sahlgrenska />);
        case 'running-app':
            return (<RunningApp />);
        case 'ui-challenges':
            return (<UIChallenges />);
        case 'call4help':
            return (<Call4Help />);
        default:
            return <Navigate to="/" />
    }
}

export default Project;
