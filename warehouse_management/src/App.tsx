import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



function App1() {
  return (
    <div className="App">
      
      <header className="">
        <Navbar />
        <h1>Hello and welcome!</h1> 
      </header>
      <div className="container">
        <ProductTable/>
      </div>
    </div>
  );
}
function Navbar() {
  // navbar
  return(
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Online Shop</a>
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
      <Product name="Fictional Phone 3000" EAN="123" type="Phone" weight="100" color="red" active="false" />
      <Product name="Thomas"/>
    </tbody>
  </table>
);

}
class Product extends React.Component{
  constructor(props) {
    super(props);
    this.Name = props.name;
    this.EAN = props.EAN;
    this.Type = props.type;
    this.Weight = props.weight;
    this.Color = props.color;
    this.active = props.active;
  }
  dot() {
    if(this.active) {
      return <span class={"dot dot-green"}></span>;
    }
    else {
      return <span class={"dot dot-red"}></span>;
    }
    
  }
  render() {
    return (
      <tr>
        <td>
          {this.Name}
        </td>
        <td>
          {this.EAN}
        </td>
        <td> {this.Type} </td>
        <td> {this.Weight + " g"} </td>
        <td> {this.Color} </td>

        <td> {this.dot()} </td>
      </tr>
    );
  }
}