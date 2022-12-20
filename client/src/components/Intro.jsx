import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const color = 'white'

function Intro() {
    return (
        <>
            <div
                css={css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
        color: ${color};
    }
    `}
            >
            Test

            </div>
            <p>Hi! I'm Ludvig, a front-end developer and UI|UX designer in Gothenburg, Sweden. </p></>
    )
}

export default Intro;