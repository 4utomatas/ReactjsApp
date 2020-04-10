import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
// Style
import './bootstrap/css/bootstrap.css';

function App() {
  // DataStorage();
  return (
    <div className="App">
      <header className="">
        <Navbar/>
        <h1>Product list:</h1> 
      </header>
      <div className="container">
        <ProductTable/>
      </div>
    </div>
  );
}

function ProductTable() {
  return (
    <table className="table table-bordered table-striped product-table">
      <thead>
        <tr>
          <td> Name </td>
          <td> EAN </td>
          <td> Type </td>
          <td> Weight </td>
          <td> Color </td>
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

 

export default App;
