import React from "react";
import ImageWithText from "./ImageWithText";

function Challenge(props) {
    return (
        <div css = {{ marginTop: '50px'}}>
            <h2>
                {props.title}
            </h2>
            <ImageWithText layout={props.layout} text={props.text} image={props.image}/>
        </div>
    );
}

export default Challenge;