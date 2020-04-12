import React from 'react';
import {useParams, Link} from 'react-router-dom';

export default function Delete() {
    let { id } = useParams();
    try {
        localStorage.removeItem(id);
        return (
            <div>
                <p>The product was deleted.</p>
                <Link className="btn btn-success" to={`/products/`}> Go back </Link>
            </div>
        );  
    }
    catch(ex) {
        return(
        <div>
            <p>The product was not found</p>
            <Link className="btn btn-success" to={`/products/`}> Go back </Link>
        </div>
        
        );
    }
}