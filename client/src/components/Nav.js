import React from 'react';
import {Link} from "react-router-dom"
import '../App/App.css';

export default function Nav(){
    return(
        <>
        {/* /*Navigation Links */}
        <Link to ="/">Home</Link>
        <Link to = "/Portfolio">Portfolio</Link>
        <Link to = "/Materials">Materials</Link>
        <Link to = "/Contact">Contact</Link>
        </>
    );
}