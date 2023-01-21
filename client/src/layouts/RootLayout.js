import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function RootLayout() {
    return (
        <div css={css`margin: 3% 12% 0 12%;`}>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default RootLayout;