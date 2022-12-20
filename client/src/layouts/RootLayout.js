import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <div className="header-container">
                    <div className="header-nav-box">
                        <div className="header-nav-content">
                            <div className="link-space"><NavLink to="/">WORK</NavLink></div>
                            <div className="link-space"><NavLink to="about"> ABOUT</NavLink></div>
                        </div>
                    </div>
                    <div className="info-box-container">
                        <img src="/images/profile.jpg" alt="Profile image" className="circle-img"></img>
                        <div className="info-text">
                            <p className="heading">Ludvig Andersson</p>
                            <p className="small-text">Front-end dev & UX|UI designer</p>
                        </div>
                    </div>
                    <div className="header-nav-box">
                        <div className="header-nav-content right">
                            <div className="link-space"><NavLink to="contact">CONTACT</NavLink></div>
                            <div className="link-space"><NavLink to="resume">RESUMÉ</NavLink></div>
                        </div>
                    </div>
                </div>
            </header >

            <main>
                <Outlet />
            </main>
        </div >
    )
}

export default RootLayout;