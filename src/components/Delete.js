import React from 'react';
import {useParams} from 'react-router-dom';

export default function Delete() {
    let { id } = useParams();
    let obj = new Object();
    try {
        let item = localStorage.removeItem(id);
        return (
            <p>The product was deleted.</p>
        );  
    }
    catch(ex) {
        return(<div>"The product was not found"</div>);
    }
}