import React from 'react';
import {Link} from 'react-router-dom';

export default function Create() {
    return <CreateForm />;      
}

class CreateForm extends React.Component {
    constructor() {
        super();
      this.state = {
        Name: "",
        Type: "",
        EAN: "",
        Weight: "",
        Color: "",
        Quantity: "",
        Price: ""
      };
      // Save the EAN code if it is changed
    //   this.EAN = props.obj.EAN;
    //   this.Price = props.obj.Price;
    //   this.Quantity = props.obj.Quantity;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    CaptureChange(props) {
        CreateHistory({type: 'q', value: props.Quantity, EAN: props.EAN});
        CreateHistory({type: 'p', value: props.Price, EAN: props.EAN});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let updated = {
            Name: this.state.Name,
            Type: this.state.Type,
            EAN: this.state.EAN,
            Weight: this.state.Weight,
            Color: this.state.Color,
            Quantity: this.state.Quantity,
            Price: this.state.Price
        };
        let jsonified = JSON.stringify(updated);
        localStorage.setItem(this.state.EAN, jsonified);

        this.CaptureChange({Quantity: updated.Quantity, Price: updated.Price, EAN: updated.EAN});
        alert('Your changes have been saved');
        
    }
    
    render() {
      return (
        <div className="col-md-4 offset-md-4 text-left">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="ean">EAN code:</label>
                    <input
                        id="ean"
                        className="form-control"
                        name="EAN"
                        type="text"
                        value={this.state.EAN}
                        onChange={this.handleInputChange} 
                        />
                </div>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input
                        id="name"
                        className="form-control"
                        name="Name"
                        type="text"
                        value={this.state.Name}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="type">Type:</label>
                    <input
                        id="type"
                        className="form-control"
                        name="Type"
                        type="text"
                        value={this.state.Type}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="weight">Weight:</label>
                    <input
                        id="weight"
                        className="form-control"
                        name="Weight"
                        type="number"
                        step="0.1"
                        min="0"
                        value={this.state.Weight}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="color">Color:</label>
                    <input
                        id="color"
                        className="form-control"
                        name="Color"
                        type="text"
                        value={this.state.Color}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="qty">Quantity:</label>
                    <input
                        id="qty"
                        className="form-control"
                        name="Quantity"
                        type="number"
                        min="0"
                        step="1"
                        value={this.state.Quantity}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="price">Price:</label>
                    <input
                        id="price"
                        className="form-control"
                        name="Price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={this.state.Price}
                        onChange={this.handleInputChange} />
                </div>

                <input className="btn btn-dark mr-1" type="submit" value="Create" />
                <Link className="btn btn-success" to={`/`}> Go back </Link>
            </form>
        </div>
        
      );
    }
}
function CreateHistory(props) {
    let obj = {};
    // q or p - quantity or price
    let type = props.type;
    // identify in local storage
    let id = props.EAN;
    let newValue = props.value;

    let currentDate = new Date(Date.now()).toISOString();
    let splitDate = currentDate.split('T');    

    // Create a new history for the product
    obj = {EAN: id, History: [{date: splitDate[0], value: newValue }]};
    let jsonified = JSON.stringify(obj);
    localStorage.setItem(`${type}${id}`, jsonified);

    return null;
}