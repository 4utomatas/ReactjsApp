import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.css';

function App() {
  // DataStorage();
  return (
    <div className="App">
      <header className="">
        <Navbar/>
        <h1>Hello and welcome!</h1> 
      </header>
      <div className="container">
        <ProductTable/>
      </div>
    </div>
  );
}

function AddToLocalStorage() {
  localStorage.clear();
  var arr = [
    { Name: "Fictional Phone 3000", EAN: "5165157459314", Type: "Phone", Weight: "100", Color: "Red", Active: "false" },
    { Name: "Fictional Phone 3001", EAN: "8214110681686", Type: "Phone", Weight: "127", Color: "Black", Active: "false" },
    { Name: "Fictional Phone 3001", EAN: "5787798767753", Type: "Phone", Weight: "127", Color: "Silver", Active: "true"},
    { Name: "Fictional Phone 3002", EAN: "3913406269384", Type: "Phone", Weight: "107", Color: "Gold", Active: "false"},
    { Name: "Fictional Phone 3003", EAN: "6976202303917", Type: "Phone", Weight: "106", Color: "Rose Gold", Active: "false"},
    { Name: "Tank toy", EAN: "7483869738297", Type: "Toy", Weight: "500", Color: "khaki", Active: "true"}
  ];
  for( var el of arr) {
    console.log(el);
    let myJSON = JSON.stringify(el);
    console.log("JSON:", myJSON)
    localStorage.setItem(el.EAN, myJSON);
  }
  window.location.reload(false);
  return null;
}



function Navbar() {
  // navbar
  return(
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="#top">Online Shop</a>      
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={AddToLocalStorage}>Refresh List</a>
        </li>
      </ul>    
    </nav>
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

function UpdateActive(ean) {
  let el = localStorage.getItem(ean);
  try {
    let parsed = JSON.parse(el);

    if(parsed.Active == "true")
      parsed.Active = "false";
    else parsed.Active = "true";

    el = JSON.stringify(parsed);
    localStorage.setItem(ean, el);
  }
  catch(ex) {
    alert("Product status was not updated");
  }
  return null;
}


class Product extends React.Component{
  constructor(props) {
    super(props);
    if(props.el.Active == "true"){
      this.state = {isActive: true};
    }
    else this.state = {isActive: false};
    this.Name = props.el.Name;
    this.EAN = props.el.EAN;
    this.Type = props.el.Type;
    this.Weight = props.el.Weight;
    this.Color = props.el.Color;
    
    // This binding is necessary to make `this` work in the callback
    this.ChangeStatus = this.ChangeStatus.bind(this);
  }
  ChangeStatus() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
    UpdateActive(this.EAN);
    
  }
  DisplayDot() {
    if(this.state.isActive) {
      return <a href="#" onClick={this.ChangeStatus}><span className={"dot dot-green"}></span></a>;
    }
    else {
      return <a href="#" onClick={this.ChangeStatus}><span className={"dot dot-red"}></span></a>;
    }
    
  }
  DisplayWeight() {
    if(this.Weight) {
      return this.Weight + " g.";
    }
    else {
      return "No specified value";
    }
  }
  render() {
    return (
      <tr>
        <td> {this.Name} </td>
        <td> {this.EAN} </td>
        <td> {this.Type} </td>
        <td> {this.DisplayWeight()} </td>
        <td> {this.Color} </td>
        <td> {this.DisplayDot()} </td>
      </tr>
    );
  }
}
export default App;
