import React from 'react';
import Product from './Product';
import {useParams} from 'react-router-dom';

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
            <div className="container">
                <ul className="text-left">
                    <li>{obj.Name}</li>
                    <li>{obj.Type}</li>
                    <li>{obj.Color}</li>
                    <li>{obj.EAN}</li>
                </ul>
            </div>
        );      
    }
    else return <h2> The product is not found </h2>;      
}