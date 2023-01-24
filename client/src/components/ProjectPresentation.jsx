import React from "react";

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { css } from "@emotion/react"


function ProjectPresentation(props){

    const mq = `@media (max-width: ${1155}px)`;
    const mq2 = `@media (max-width: ${570}px)`;
    const mq3 = `@media (max-width: ${450}px)`;

    return (
        <div css = {{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',  '& h1': { fontWeight: 800, fontSize: '40px'}, [mq]: {gap: '50px'}}}>
            <div><h1>{props.title}</h1><h5>{props.subtitle}</h5></div>
            {props.image !== "" ? <div css = {{ width: '430px;', height: '247px;', [mq2]: {width: '100%', height: '100%'}  }}>
            <img src={require(`../assets/images/${props.image}`)} alt="MikroLIS" css={{width: '100%', height: '100%'}} />
            </div> : null}
        </div>
    );
}

export default ProjectPresentation;