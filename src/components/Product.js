import React from 'react';
import './Product.css';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export default class Product extends React.Component{
    constructor(props) {
        super(props);
        if(props.el.Active === "true"){
        this.state = {isActive: true};
        }
        else this.state = {isActive: false};
        this.Name = props.el.Name;
        this.EAN = props.el.EAN;
        this.Type = props.el.Type;
        this.Weight = props.el.Weight;
        this.Color = props.el.Color;

        // Junior
        this.Quantity = props.el.Quantity;
        this.Price = props.el.Price;

        
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
        if(this.state.isActive) 
            return <a href="#dot" onClick={this.ChangeStatus}><span className={"dot dot-green"}></span></a>;
        else return <a href="#dot" onClick={this.ChangeStatus}><span className={"dot dot-red"}></span></a>;
    }

    DisplayPrice() {
        if(this.Price) {
            return Number.parseFloat(this.Price).toFixed(2) + "€";
        }
    }

    DisplayWeight() {
        if(this.Weight) 
            return this.Weight + " g.";
        else return "No specified value";
    }

    isMarked() {
        if(this.Quantity == 0) {
            console.log("it is marked");
            return "marked";
        }
            
        else return null;  
    }

    render() {
        return (
            <tr>
                <td className="align-middle"> {this.Name} </td>
                <td className="align-middle"> {this.EAN} </td>
                <td className="align-middle"> {this.Type} </td>
                <td className="align-middle"> {this.DisplayWeight()} </td>
                <td className="align-middle"> {this.Color} </td>
                <td className="align-middle"> {this.DisplayDot()} </td>
                <td className={`align-middle ${this.isMarked()}`}> {this.Quantity} </td>
                <td className="align-middle"> {this.DisplayPrice()} </td>
                <td className="align-middle">  
                    <Link className="btn btn-info mr-1" to={`/Details/${this.EAN}`}> View </Link>
                    <Link className="btn btn-primary mr-1" to={`/Edit/${this.EAN}`}> Edit </Link>
                    <Link className="btn btn-danger" to={`/Delete/${this.EAN}`}> Delete </Link>
                </td>
            </tr>
        );
    }
  }

  function UpdateActive(ean) {
    let el = localStorage.getItem(ean);
    try {
        let parsed = JSON.parse(el);

        if(parsed.Active === "true")
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