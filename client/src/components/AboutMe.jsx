import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function AboutMe() {

    const mq = `@media (max-width: ${1168}px)`;

    return (
        <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px', '& h5': { marginBottom: '20px' }, [mq]: { gap: '30px' } }}>
            <div css={css`width: 500px; border-radius: 10px; margin-right: 10px`}>
                <h5>
                    Hey there! I'm Ludvig, an interaction designer and developer with a passion for creating technology that's simple and easy to use.
                    I believe that just because something is advanced doesn't mean it has to be complicated.
                </h5>
                <h5>
                    I see myself as a helpful and empathetic person who is great at listening to others.
                    My greatest strength is using my knowledge and skills to empower others.
                    That's why I chose the field of interaction design - to give users a voice and the ability to shape the products they use.
                </h5>
                <h5>
                    When not working on designs, I spend my free time cycling to new locations, making quizzes, or binging a new show.
                    I am also a big fan of Melodifestivalen and Eurovision and I religiously follow the competitions each year.
                </h5>
            </div>
            <img src={require(`../assets/images/me.jpg`)} alt="Profile" css={css`width: 280px; height: 420px; border-radius: 10px;`}></img>
        </div>
    );
}

export default AboutMe;