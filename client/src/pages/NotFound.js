import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useNavigate } from 'react-router-dom';

function NotFound() {

    let [countdown, setCountdown] = useState(10);

    const navigate = useNavigate();

    useEffect(() => {
        let timer = setInterval(() => {
            if (countdown === 1) {
                clearInterval(timer);
                navigate('/');
            }
            setCountdown(countdown - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (

        <div css={css`text-align: center;`}>
            <h1>Error - Page not found</h1>
            <p>The page you were looking for could unfortunatly not be found!</p>
            <p>You will be redirected back to the home page shortly...</p>
            <p>Redirect in: {countdown}s</p>

        </div>
    );
}

export default NotFound;
