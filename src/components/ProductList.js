import React from 'react';
import Product from './Product';

export default function ProductList() {
    let products = [];
    for(let el in localStorage) {
      try {
        let parsed = JSON.parse(localStorage.getItem(el));
        // Do not add empty objects to the array
        if(parsed != null)
          products.push(parsed);
      }
      catch (ex) {
        // if something is wrong, the object is skipped
      }
    }
    const list = products.map( (product, index) => 
      <Product key={index} el={product} />
    );
    return list;
  }