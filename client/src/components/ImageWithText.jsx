import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


function ImageWithText(props) {

    const mq = `@media (max-width: ${768}px)`;
    const mq2 = `@media (min-width: ${1000}px)`;
    let layout = props.layout === "reverse" ? "row-reverse" : "row";

    return (
        <div css={{
            width: '100%',
            display: 'flex',
            flexDirection: layout,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '30px', gap: 30,
            '& h5': { marginBottom: '20px', fontSize: '2vw' },
            [mq]: {
                gap: '10px',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                '& h5': { fontSize: '2.7vh', marginTop: '20px' }
            },
            [mq2]: {
                'h5': { fontSize: '20px' }
            }
        }}>
            <div css={{ width: '55%', height: '100%', [mq]: { width: '100%' } }}>
                <h5>
                    {props.text}
                </h5>
            </div>
            <div css={{ width: '40%', [mq]: { width: '80%' } }}>
                <img src={require(`../assets/images/challenges/${props.image}.png`)} alt="Profile" css={{ objectFit: 'contain', height: 'auto', width: '100%', borderRadius: '10px' }} />
            </div>
        </div>
    );
}

export default ImageWithText;