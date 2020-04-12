import React from 'react';
import {useParams} from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function History(props) {
    let { id } = useParams();
    let obj = new Object();
    try {
        let item = localStorage.getItem(`${props.type}${id}`);
        obj = JSON.parse(item); 
    }
    catch(ex) {
        return(<p>History is empty</p>);
    }
    if(obj !== null && obj.EAN !== null) {
        return <RenderLineChart History={obj.History} />;
    } else return <p> History is empty </p>;
}

class RenderLineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 600,
            y: 300
        };
        this.History = props.History;

        this.Bigger = this.Bigger.bind(this);
        this.Smaller = this.Smaller.bind(this);
    }
    Bigger() {
        let obj = {};
        this.setState((state, obj) => ({
            x: state.x < 2000 ? state.x + 100 : state.x,
            y: state.y < 1000 ? state.y + 50 : state.y
        }));
    }
    Smaller() {
        let obj = {};
        this.setState((state, obj) => ({
            x: state.x > 100 ? state.x - 100 : state.x,
            y: state.y > 50 ? state.y - 50 : state.y
        }));
    }
    render (){
        return (
        <div>
            <button className="btn btn-danger mr-1" onClick={this.Smaller}>-</button>   
            <button className="btn btn-success" onClick={this.Bigger}>+</button>
            
            <LineChart width={this.state.x} height={this.state.y} data={this.History} margin={{ top: 5, right: 20, bottom: 5, left: 50 }}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" padding={{left: 20, right: 20}} />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>);
    }
}
  