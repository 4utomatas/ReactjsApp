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
import Footer from "./components/Footer";
import ProductTable from "./components/ProductTable";

import Details from "./components/Details";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
// Style
import './bootstrap/css/bootstrap.css';

function App() {
  // DataStorage();
  return (
    <Router>
      <Navbar/> 
      <main className="container">    
        <Switch>
          <Route path="/Delete/:id">
            <Delete />
          </Route>
          <Route path="/Edit/:id">
            <h1>Edit product</h1>
            <Edit />
          </Route>
          {/* Details */}
          <Route path="/:id">
            <h1>View details of a product</h1>
            <Details />
          </Route>
          <Route path="/">
            <h1>Product list:</h1> 
            <ProductTable/>
          </Route>
        </Switch>
      </main> 
      <Footer />
    </Router>
  );
}
export default App;
