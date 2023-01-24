import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function NavBar() {

    const [showImage, setImageStatus] = useState(true);

    function handleToggle() {
        if(showImage) {
            setImageStatus(false);
        } else {
            setTimeout(() => {
                setImageStatus(true);
              }, 300);
        }
    }

    const linkStyling = "font-weight: 500 !important; transition: 0.1s; &:hover {text-decoration:none; cursor:pointer; font-weight: 700 !important;}";

    return (
        <>
            <Navbar expand="md" className='d-print-none' onToggle={handleToggle}>
                <Container className="containers"  style={{ marginLeft: 0, padding: 0 }}>
                    <Navbar.Brand className={showImage ? 'd-block d-sm-block d-md-none d-lg-none order-md-0 order-1' : 'd-none d-sm-none d-md-none d-lg-none order-md-0 order-1'}>
                        <img src={require(`../assets/images/profile.jpg`)}  alt="Circular portrait" css={css`width: 40px; height: 40px; border-radius: 50%; `} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav ms-0" className="order-md-1 order-0" css={css`margin: 10px 0;`}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Text>
                            <div css={css`min-width: 75px; margin-right: 8px;`}><NavLink to="/" css={css`${linkStyling}`}>WORK</NavLink></div>
                        </Navbar.Text>
                        <Navbar.Text>
                            <div css={css`min-width: 75px;`}><NavLink to="about" css={css`${linkStyling}`}>ABOUT</NavLink></div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-center">
                        <div className="d-none d-lg-block d-md-block"><img src={require(`../assets/images/profile.jpg`)}  css={css`width: 40px; height: 40px; border-radius: 50%;`} /></div>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <div css={css`min-width: 150px; @media only screen and (min-width: 768px) {text-align: right;}`}><a href={require(`../assets/Solid_Beans_Ludvig_Andersson.pdf`)} download css={css`${linkStyling}`}>DOWNLOAD RESUME</a></div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default NavBar;