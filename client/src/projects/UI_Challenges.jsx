import React from "react";
import ProjectPresentation from "../components/ProjectPresentation";
import Challenge from "../components/Challenge";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function UI_Challenges() {
    return (
        <>
            <ProjectPresentation
                title="UI Challenges"
                subtitle="Practice making interface components"
                image=""
                imgWidth='100%'
                imgHeight='100%'
            />
            <div css={css`margin: 25px 10% 0 0; @media only screen and (max-width: 768px) {margin: 25px 0 0 0}`}>
                <p>Doing daily UI challenges can be a great way to practice skills like typography, hierarchy, color, and layout.
                    As well as getting more proficient using a specific design tool like Figma. Here are some of my favourite designs I made in the challenge: <br /><br /> <i>(More coming soon)</i> </p>
            </div>
            <Challenge
                title="Day 1 - Sign Up"
                text="Today's prompt opened up lots of directions to take the design. 
                I picked a marketing course as a starting point and leaned heavily into a sustainability and playful feel. 
                The challenge made me focus on nailing the fundamentals with a signup page, while at the same time having some fun with custom art to match my chosen look and feel."
                image="SignUpPage.png"
            />
            <Challenge
                title="Day 2 - Checkout"
                layout="reverse"
                text="The second challenge also has some core fundamentals that need to be right for the design to work. 
                I've focused on these core elements: card info, pricing, and viewing the products. 
                I have used simple and luxurious colors, emphasized guiding the user to a successful checkout, and tried to use skeuomorphism to mimic a ripped paper receipts."
                image="checkout.png"
            />
            <Challenge
                title="Day 4 - Calculator"
                text="Unlike previous challenges, a calculator has some stringent boundaries. 
                Users expect a calculator to look a certain way and moving away from this look most often worsens the design. 
                Instead, I focused on trying to pair good colors with big bold typography. 
                The result is nothing all that special, and I guess that is by design."
                image="Calculator.png"
            />
            <Challenge
                title="Day 5 - App Icon"
                layout="reverse"
                text="For me, some of the core functionality of an app's icon are recognisability, legibility, and a connection to what the app does. 
                I wanted to achieve this by keeping the design simple with geometric shapes. 
                I went with a family tree app as my branding and focused on branching that happens in a family's lineage. 
                To avoid making the app a 'plant app', I tried making the background grey and 'old'. 
                This aspect of the design could still use some work."
                image="AppIcon.png"
            />
        </>
    );
}

export default UI_Challenges;
