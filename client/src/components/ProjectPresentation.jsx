import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function ProjectPresentation(){

    const mq = `@media (max-width: ${1155}px)`;

    return (
        <div css = {{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',  '& h1': { fontWeight: 800, fontSize: '40px'}, [mq]: {gap: '50px'}}}>
            <div><h1>MikroLIS</h1><h5>UX|UI Design & Frontend project at Sahlgrenska</h5></div>
            <img src={"/images/MikroLIS.png"} alt="Profile" css={css`width: 430px; height: 247px;`}></img>
        </div>
    );
}

export default ProjectPresentation;