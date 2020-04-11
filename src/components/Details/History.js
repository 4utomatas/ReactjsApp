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
        return(<div>Error: The product was not found, ID: {id}</div>);
    }
    if(obj !== null && obj.EAN !== null) {
        return <RenderLineChart History={obj.History} />;
    } else return <h2> The product was not found, ID: {id} </h2>;
}

function RenderLineChart(props) {
    return (
        <LineChart width={600} height={300} data={props.History} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" padding={{left: 20, right: 20}} />
            <YAxis />
            <Tooltip />
        </LineChart>
  );
}
  