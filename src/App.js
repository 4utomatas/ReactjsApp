import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.css';

AddToLocalStorage();

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
// function DataStorage() {
//   // Storing data:
//   var myObj = { Name: "Fictional Phone 3000", EAN: "123abc", Type: "Phone", Weight: "100", Color: "red", Active: "false"};
//   var myJSON = JSON.stringify(myObj);
//   localStorage.setItem("testJSON", myJSON);

//   // Retrieving data:
//   var text = localStorage.getItem("testJSON");
//   var textParsed = JSON.parse(text);
//   return textParsed;
// }
// function DataDisplay() {
//   var object = DataStorage();

//   return (
//   <div>
//     {object.Name + " is " + object.Color + " color. "}
//   </div>);

// }


function AddToLocalStorage() {
  var arr = [
    { Name: "Fictional Phone 3000", EAN: "5165157459314", Type: "Phone", Weight: "100", Color: "Red", Active: "false" },
    { Name: "Fictional Phone 3001", EAN: "8214110681686", Type: "Phone", Weight: "127", Color: "Black", Active: "false" },
    { Name: "Fictional Phone 3001", EAN: "5787798767753", Type: "Phone", Weight: "127", Color: "Silver", Active: "true"},
    { Name: "Fictional Phone 3002", EAN: "3913406269384", Type: "Phone", Weight: "107", Color: "Gold", Active: "false"},
    { Name: "Fictional Phone 3002", EAN: "3913406269384", Type: "Phone", Weight: "107", Color: "Gold", Active: "false"},
    { Name: "Fictional Phone 3003", EAN: "6976202303917", Type: "Phone", Weight: "106", Color: "Rose Gold", Active: "false"},
    { Name: "Tank toy", EAN: "7483869738297", Type: "Toy", Weight: "500", Color: "khaki", Active: "true"}
  ];

  for( var el in arr) {
    var myJSON = JSON.stringify(el);
    localStorage.setItem(el.EAN, el);
  }
}



function Navbar() {
  // navbar
  return(
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="#top">Online Shop</a>
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
        
      </tbody>
    </table>
  );
}

function ParseData() {
  for(var el in localStorage) {
    
  }
} 




class Product extends React.Component{
  constructor(props) {
    super(props);
    if(props.active === "true"){
      this.state = {isActive: true};
    }
    else this.state = {isActive: false};
    
    this.Name = props.name;
    this.EAN = props.EAN;
    this.Type = props.type;
    this.Weight = props.weight;
    this.Color = props.color;
    
    // This binding is necessary to make `this` work in the callback
    this.ChangeStatus = this.ChangeStatus.bind(this);
  }
  ChangeStatus() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
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
