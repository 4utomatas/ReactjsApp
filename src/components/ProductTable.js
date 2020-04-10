import React from 'react';
import Product from './Product';


export default function ProductTable() {
  return (
    <table className="table table-bordered table-striped product-table">
      <thead>
        <tr>
          <td> Name </td>
          <td> EAN </td>
          <td> Type </td>
          <td> Weight </td>
          <td> Color </td>
          <td> Quantity</td>
          <td> Price </td>
          <td> Active </td>
          <td> Actions </td>
        </tr>
      </thead>
      <tbody>        
        <ProductList/>
      </tbody>
    </table>
  );
}

function ProductList() {
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

