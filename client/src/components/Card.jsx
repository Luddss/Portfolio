import React from "react";
import { NavLink } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Card(props) {

    if(props.hoverText === "Call4Help") {
        return (
            <div>
                <div css={{ color: 'black', position: 'relative', transition: 'all .2s ease-in-out', '&:hover': { '& .title': { opacity: '1' }, '& .text-container': { opacity: '0.65' }, '& img': {filter: 'blur(5px)' }}}}>
                    <img src={"/images/" + props.image} alt="Profile" css={css`width: 100%; height: 100%; border-radius: 6px;`}></img>
                    <div className="text-container" css={css`background-color: white; border-radius: 6px; transition: .5s ease; opacity: 0; position: absolute; top: 0%; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; @media only screen and (max-width: 768px) {opacity: 0.6}`}>
                        <div className="title" css={css`font-size: 18px; transition: .5s ease; opacity: 0;  @media only screen and (max-width: 768px) {opacity: 1}`}>
                            <h4>Coming Soon</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <NavLink to={"/" + props.url}>
            <div css={{ color: 'black', position: 'relative', transition: 'all .2s ease-in-out', '&:hover': { transform: 'scale(1.04)' , '& .title': { opacity: '1' }, '& .text-container': { opacity: '0.6' }}}}>
                <img src={"/images/" + props.image} alt="Profile" css={css`width: 100%; height: 100%; border-radius: 6px;`}></img>
                <div className="text-container" css={css`background-color: white; transition: .5s ease; opacity: 0; position: absolute; top: 80%; width: 100%; height: 12%; display: flex; justify-content: center; align-items: center; @media only screen and (max-width: 768px) {opacity: 0.6}`}>
                    <div className="title" css={css`font-size: 18px; transition: .5s ease; opacity: 0;  @media only screen and (max-width: 768px) {opacity: 1}`}>
                        {props.hoverText}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Card;