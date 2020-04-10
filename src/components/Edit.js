import React from 'react';
import {useParams} from 'react-router-dom';

export default function Edit() {
    let { id } = useParams();
    let obj = new Object();

    try {
        let item = localStorage.getItem(id);
        obj = JSON.parse(item); 
    }
    catch(ex) {
        return(<div>"The product is not found"</div>);
    }

    if(obj !== null && obj.EAN !== null) {
        return (
            <EditForm obj={obj} />
        );      
    }
    else return <h2> The product was not found </h2>;      
}

class EditForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Name: props.obj.Name,
        Type: props.obj.Type,
        EAN: props.obj.EAN,
        Weight: props.obj.Weight,
        Color: props.obj.Color
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
      alert('You changes have been changed');
      event.preventDefault();
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
                        onChange={this.handleInputChange} />
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
                        type="text"
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

                <input type="submit" value="Submit" />
            </form>
        </div>
        
      );
    }
}