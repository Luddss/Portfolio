import React from "react";
import Sahlgrenska from "../projects/Sahlgrenska";
import Running_App from "../projects/Running_app";
import UI_Challenges from "../projects/UI_Challenges";
import { useParams, Navigate } from "react-router-dom";

function Project() {

    const { projectId } = useParams();

    switch (projectId) {
        case 'sahlgrenska':
            return (<Sahlgrenska />);
        case 'running-app':
            return (<Running_App />);
        case 'ui-challenges':
            return (<UI_Challenges />);
        default:
            return <Navigate to="/" />
    }
}

export default Project;
