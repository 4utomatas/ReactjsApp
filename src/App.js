import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
// Style
import './bootstrap/css/bootstrap.css';

function App() {
  // DataStorage();
  return (
    <Router>
      <div className="App">
        <header className="">
          <Navbar/>
        </header>
        
        <Switch>
        <Route path="/Delete/:id">
            <h1>Delete a product</h1>
            <Delete />
          </Route>
          <Route path="/Details/:id">
            <h1>View details of a product</h1>
            <Details />
          </Route>
          <Route path="/Edit/:id">
            <h1>Edit product</h1>
            <Edit />
          </Route>
          <Route path="/">
            <div className="container">
              <h1>Product list:</h1> 
              <ProductTable/>
            </div>
          </Route>
        </Switch>
        
      </div>
    </Router>
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
          <td> Quantity</td>
          <td> Price </td>
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
