import React, { useState } from "react";
import Sahlgrenska from "../projects/Sahlgrenska";
import Running_App from "../projects/Running_app";
import UI_Challanges from "../projects/UI_Challanges";
import { useParams, Navigate } from "react-router-dom";

function Project() {

    const { projectId } = useParams();

    switch (projectId) {
        case 'sahlgrenska':
            return (<Sahlgrenska />);
        case 'running-app':
            return (<Running_App />);
        case 'ui-challanges':
            return (<UI_Challanges />);
        default:
            return <Navigate to="/" />
    }
}

export default Project;
