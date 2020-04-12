import React from 'react';
import {useParams} from 'react-router-dom';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function History(props) {
    let { id } = useParams();
    let obj = {};
    try {
        let item = localStorage.getItem(`${props.type}${id}`);
        obj = JSON.parse(item); 
    }
    catch(ex) {
        return(<p>History is empty</p>);
    }
    if(obj !== null && obj.EAN !== null) {

        // last 5 changes
        if(obj.History.length > 5) {
            obj.History.splice(0, obj.History.length - 5);
        }
        // array date and value
        let arrd = [];
        let arrv = [];
        for(let el of obj.History) {
            arrd.push(el.date);
            arrv.push(Number(el.value));
        }
        // console.log(arrd);
        // console.log(arrv);
        return <HighLineChart date={arrd}  value={arrv} type={props.type} />
        // return <RenderLineChart History={obj.History} />;
    } else return <p> History is empty </p>;
}

// class RenderLineChart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             x: 600,
//             y: 300
//         };
//         this.History = props.History;

//         this.Bigger = this.Bigger.bind(this);
//         this.Smaller = this.Smaller.bind(this);
//     }
//     Bigger() {
//         let obj = {};
//         this.setState((state, obj) => ({
//             x: state.x < 2000 ? state.x + 100 : state.x,
//             y: state.y < 1000 ? state.y + 50 : state.y
//         }));
//     }
//     Smaller() {
//         let obj = {};
//         this.setState((state, obj) => ({
//             x: state.x > 100 ? state.x - 100 : state.x,
//             y: state.y > 50 ? state.y - 50 : state.y
//         }));
//     }
//     render (){
//         return (
//         <div>
//             <button className="btn btn-danger mr-1" onClick={this.Smaller}>-</button>   
//             <button className="btn btn-success" onClick={this.Bigger}>+</button>
            
//             <LineChart width={this.state.x} height={this.state.y} data={this.History} margin={{ top: 5, right: 20, bottom: 5, left: 50 }}>
//                 <Line type="monotone" dataKey="value" stroke="#8884d8" />
//                 <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//                 <XAxis dataKey="date" padding={{left: 20, right: 20}} />
//                 <YAxis />
//                 <Tooltip />
//             </LineChart>
//         </div>);
//     }
// }

class HighLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        title: {
          text: "History"
        },
        xAxis: {
            categories: props.date,
            title: {
              text: "Date"
            }
        },
        yAxis: {
          title: {
            text: props.type === 'q' ? 'Quantity' : 'Price'
          }
        },
        series: [
            { name: props.type === 'q' ? 'Quantity' : 'Price',
              data: props.value }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }

  setHoverData = (e) => { 
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  render() {
    const { chartOptions, hoverData } = this.state;
    
    return (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
    )
  }
}