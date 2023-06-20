import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Footer() {

    return (
        <>
            <div css={css`height: 150px; margin-top: 100px; padding-top: 50px; border-top: 1px solid lightgrey;`}>
                <div css={{ display: 'flex', justifyContent: 'center', gap: '2px' }}>
                    <p>Available for work</p>
                    <p>
                        |
                    </p>
                    <div css={{ width: '66px' }}>
                        <p>
                            <a href="https://www.linkedin.com/in/ludvig-andersson-la/" target="_blank" rel="noopener noreferrer" css={css`text-decoration: none; color: #FF761F; transition: 0.1s; &:hover {color: #FF761F; text-decoration:none; cursor:pointer; font-weight: 600;}`}>
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;