import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <Navbar className="navigationBar ms-0" expand="lg">
            <Container style={{ padding: 0 }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Text>
                        <div className="link-space"><NavLink to="/">Work</NavLink></div>
                    </Navbar.Text>
                    <Navbar.Text>
                        <div className="link-space"><NavLink to="about">About</NavLink></div>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        <div className={"link-space right"}><NavLink to="contact">Contact</NavLink></div>
                    </Navbar.Text>
                    <Navbar.Text>
                        <div className={"link-space right"}><NavLink to="resume">Resume</NavLink></div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;