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
                padding: 0 23%;
            }
        `}>
            <p css={css`font-size: 18px`}>Welcome to my portfolio website! I'm a UX|UI designer and front-end developer based in Gothenburg, Sweden. 
            I create beautiful, user-friendly digital experiences with an eye for detail.
            Check out my projects and if you find them interesting, let's connect and discuss how we can collaborate!</p>
        </div>
    )
}

export default Intro;