import React from 'react';
import {useParams, Link} from 'react-router-dom';

export default function Delete() {
    let { id } = useParams();
    let obj = new Object();
    try {
        let item = localStorage.removeItem(id);
        return (
            <div>
                <p>The product was deleted.</p>
                <Link className="btn btn-success" to={`/`}> Back </Link>
            </div>
        );  
    }
    catch(ex) {
        return(
        <div>
            <p>The product was not found</p>
            <Link className="btn btn-success" to={`/`}> Go back </Link>
        </div>
        
        );
    }
}