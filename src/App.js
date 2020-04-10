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
        <h1>Product list:</h1> 
        <Switch>
          <Route path="/Details/:id">
            <Details />
          </Route>
          <Route path="/">
            <div className="container">
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
