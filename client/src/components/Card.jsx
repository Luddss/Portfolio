import React from "react";
import { NavLink } from "react-router-dom";

function Card() {
    return (
        <NavLink to="/1">
            <img src="/images/profile.jpg" alt="Profile image" className="simple-card"></img>
        </NavLink>
    );
}

export default Card;