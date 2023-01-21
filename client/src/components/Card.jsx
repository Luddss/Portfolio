import React from "react";
import { NavLink } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Card(props) {
    return (
        <NavLink to={"/" + props.url}>
            <img src="/images/profile.jpg" alt="Profile" css={css `width: 100%; height: 100%; border-radius: 6px; transition: all .2s ease-in-out; &:hover {transform: scale(1.05);}` }>
            </img>
        </NavLink>
    );
}

export default Card;