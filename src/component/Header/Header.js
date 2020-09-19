import React from 'react';
import "./Header.css";
import { link, Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            

            
        </header>
    )
}
