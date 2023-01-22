import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Footer() {

    return (
        <>
            <div css={css`height: 150px; margin-top: 100px; padding-top: 50px; border-top: 1px solid lightgrey; text-align: center;`}>
                <p>
                    Consultant <a href="https://www.solidbeans.com/" css={css`text-decoration: none; color: #FF761F;  transition: 0.1s; &:hover {color: #FF761F; text-decoration:none; cursor:pointer; font-weight: 600;}`}>
                        @ Solid Beans
                    </a> | <a href="https://www.linkedin.com/in/ludvig-andersson-la/" css={css`text-decoration: none; color: #050504; transition: 0.1s; &:hover {color: #050504; text-decoration:none; cursor:pointer; font-weight: 600;}`}>
                        LinkedIn
                    </a>
                </p>
            </div>
        </>
    );
}

export default Footer;