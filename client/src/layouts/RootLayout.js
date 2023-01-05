import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;