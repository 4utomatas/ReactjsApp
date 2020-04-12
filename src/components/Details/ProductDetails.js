import React from 'react';
import {useParams} from 'react-router-dom';

export default function ProductDetails() {
    let { id } = useParams();
    let obj = {};
    try {
        let item = localStorage.getItem(id);
        obj = JSON.parse(item); 
    }
    catch(ex) {
        return(<div>Error: The product was not found, ID: {id}</div>);
    }
    if(obj !== null && obj.EAN !== null) {
        return (
            <div>
                <p> Product details: </p>
                <ul>
                    <li>Name: {obj.Name} </li>
                    <li>Type: {obj.Type} </li>
                    <li>Color: {obj.Color} </li>
                    <li>EAN code: {obj.EAN} </li>
                    <li>Weight: {obj.Weight} g.</li>
                    <li>Quantity: {obj.Quantity} </li>
                    <li>Price: {obj.Price}€ </li>
                </ul>
                
            </div>
            

        );
    } else return <h2> The product was not found, ID: {id} </h2>;
}