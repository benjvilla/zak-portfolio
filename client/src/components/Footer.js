import React from 'react';
import { Link } from "react-router-dom"
import '../App/App.css';

export default function Nav(){
    return(
        <>
        {/* /*Navigation Links */}
        <Link to ="/">Home</Link>
        <Link to = "/portfolio">Portfolio</Link>
        <Link to = "/e-learning">E-Learning</Link>
        <Link to = "/contact">Contact</Link>
        </>
    );
}