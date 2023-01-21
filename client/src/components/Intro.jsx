import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Intro() {
    return (
        <div css={css`
            text-align: left; 
            margin-top: 30px;
            margin-bottom: 20px;
            @media only screen and (min-width: 768px) {
                text-align: center;     
                margin-top: 100px;
                margin-bottom: 125px;
            }
        `}>
            <p>Hi! I'm Ludvig, a front-end developer and UI|UX designer in Gothenburg, Sweden. </p>
        </div>
    )
}

export default Intro;