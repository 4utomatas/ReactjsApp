import React from 'react';
import Product from './Product';
import $ from 'jquery';
import 'tablesorter';
import './ProductTable.css';



export default function ProductTable() {
  // Enable table sorter
  $(function() {
    $("#ProductTable").tablesorter({
      sortList: [[0,0]]
    });
  });

  return (
    <table className="table table-bordered table-striped product-table" id="ProductTable">
      <thead>
        <tr>
          <td>
            <div className="custom-flex-sides"> 
              <div> Name </div> <img src='/sort-solid.svg' className='sort-img' alt="sort-img" />
            </div>
          </td>
          <td>
            <div className="custom-flex-sides"> 
              <div> EAN </div> <img src='/sort-solid.svg' className='sort-img' alt="sort-img"/>
            </div>
          </td>
          <td>
            <div className="custom-flex-sides"> 
              <div> Type </div> <img src='/sort-solid.svg' className='sort-img' alt="sort-img"/>
            </div>
          </td>
          <td>
            <div className="custom-flex-sides"> 
              <div> Weight </div> <img src='/sort-solid.svg' className='sort-img' alt="sort-img"/>
            </div>
          </td>
          <td>
            <div className="custom-flex-sides"> 
              <div> Color </div> <img src='/sort-solid.svg' className='sort-img' alt="sort-img"/>
            </div>
          </td>
          <td>
            <div className="custom-flex-sides"> 
              <div> Quantity </div> <img src='/sort-solid.svg' className='sort-img' alt="sort-img"/>
            </div>
          </td>
          <td>
            <div className="custom-flex-sides"> 
              <div> Price </div> <img src='/sort-solid.svg' className='sort-img'  alt="sort-img"/>
            </div>
          </td>
          <td className="sorter-false"> Active </td>
          <td className="sorter-false">  Actions </td>
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
      // Do not add empty objects to the array or those which are history objects
      if(parsed !== null && !('History' in parsed))
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

