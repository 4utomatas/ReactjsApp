import React from 'react';
import Product from './Product';
import {useParams, Link} from 'react-router-dom';

export default function Details() {
    let { id } = useParams();
    let obj = new Object();
    try {
        let item = localStorage.getItem(id);
        obj = JSON.parse(item); 
    }
    catch(ex) {
        return(<div>"The product was not found"</div>);
    }
    if(obj !== null && obj.EAN !== null) {
        return (
            <div className="container text-left">
                <ul >
                    <li>{obj.Name}</li>
                    <li>{obj.Type}</li>
                    <li>{obj.Color}</li>
                    <li>{obj.EAN}</li>
                </ul>
                <Link className="btn btn-success" to={`/`}> Go back </Link>
            </div>
        );      
    }
    else return <h2> The product was not found </h2>;      
}