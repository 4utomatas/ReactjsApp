import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductTable from "./components/ProductTable";

import Create from "./components/Create";
import Delete from "./components/Delete";
import Details from "./components/Details";
import Edit from "./components/Edit";
// Style
import './bootstrap/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Navbar/> 
      <main className="container">    
        <Switch>
          <Route path="/products/Delete/:id">
            <Delete />
          </Route>
          <Route path="/products/Edit/:id">
            <h1>Edit product</h1>
            <Edit />
          </Route>
          <Route path="/products/Create/">
            <h1>Create new product:</h1> 
            <Create/>
          </Route>
          {/* Details */}
          <Route path="/products/:id">
            <h1>View details of a product</h1>
            <Details />
          </Route>
          <Route path="/products/">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="">
                <h1>Product list:</h1>
              </div>
              <div className="">
                <Link className="btn btn-info mr-1 btn-new" to={`/products/Create/`}> New product </Link>
              </div>
            </div>
            <ProductTable/>
          </Route>
          <Route path="/">
            <Redirect to="/products/"></Redirect>
          </Route>
        </Switch>
      </main> 
      <Footer />
    </Router>
  );
}

export default App;
