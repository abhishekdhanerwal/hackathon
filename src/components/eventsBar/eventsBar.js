import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import Spinner from '../spinner';


const data = [
  {
    name: '01 PM', passed: 2000, total: 2400, failed: 400,  amt: 2400,
  },
  {
    name: '02 PM', passed: 1000, total: 1398, failed: 398,  amt: 2210,
  },
  {
    name: '03 PM', passed: 9800, total: 9800, failed: 0, amt: 2290,
  },
  {
    name: '04 PM', passed: 3900, total: 3908, failed: 8, amt: 2000,
  },
  {
    name: '05 PM', passed: 1800, total: 4800, failed: 3000, amt: 2181,
  },
  {
    name: '06 PM', passed: 2390, total: 3800, failed: 200, amt: 2500,
  },
  {
    name: '07 PM', passed: 3490, total: 4300, failed: 200, amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
      console.log(this.props.refreshBarGraph);

    return (
        <React.Fragment>
        {this.props.refreshBarGraph ? <Spinner loading graph='bar' /> : null}

      <div style={this.props.refreshBarGraph ? {opacity: '.5'} : null}>
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="passed" fill="#82ca9d" />
        <Bar dataKey="failed" fill="#B22222" />
      </BarChart>
      </div>
      </React.Fragment>
    );
  }
}
