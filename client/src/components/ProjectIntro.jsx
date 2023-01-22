import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function ProjectIntro(props) {
    return (
        <div css={{ '& h3': { fontWeight: 600, margin: "20px 0"}, '& p': { color: "#6B6B6B"} }}>
            <h1 css={css`
            text-align: left; 
            margin-top: 30px;
            margin-bottom: 20px;
            font-weight: 600;
            @media only screen and (min-width: 768px) {
                text-align: center;     
                margin-top: 100px;
                margin-bottom: 120px;
                padding: 0 23%;
            }`}>
                Project Overview
            </h1>
            <div css={css`
            margin-top: 25px;
            margin-bottom: 20px;
            font-weight: 600;
            @media only screen and (min-width: 768px) {   
                margin-top: 60px;
                margin-bottom: 120px;
                padding: 0 9%;
            }`}>
                <h3>Reason for project:</h3>
                <p>{props.reason}</p>
                <h3>Context:</h3>
                <p>{props.context}</p>
                <h3>The problem:</h3>
                <p>{props.problem}</p>
                <h3>The Idea:</h3>
                <p>{props.idea}</p>
                <h3>My role:</h3>
                <p>{props.role}</p>
                <h3>The tools:</h3>
                <p>{props.tools}</p>
            </div>
        </div>
    );
}

export default ProjectIntro;