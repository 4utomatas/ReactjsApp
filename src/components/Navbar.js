import React from 'react';
import {Link} from 'react-router-dom';

import PopulateDB from "./PopulateDB";

function Navbar() {
    // navbar
    return(
        <nav className="navbar fixed-top navbar-dark bg-dark">
        <Link className="navbar-brand"  to={`/`}> Your Fictional Store </Link>      
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#reset" onClick={PopulateDB}>Populate DB</a>
            </li>
        </ul>    
        </nav>
    );
}

export default Navbar;