import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import Spinner from '../spinner';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const abcStyle = {
  backgroundColor:'#EFEFEF',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '100',
    top: '0px',
    left: '0px',
    opacity: '.5', /* in FireFox */ 
    filter: 'alpha(opacity=50)' /* in IE */
}

export default class LineChartLayout extends PureComponent {

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    const { opacity } = this.state;
    console.log(this.props.refresh)
    console.log(this.props.cpuUtilizationData)
    return (
      <React.Fragment>
        {this.props.refresh ? <Spinner loading /> : null}
      <div style={this.props.refresh ? {opacity: '.5'} : null}>
        <LineChart
          width={500}
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
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" /> */}
        </LineChart>
        {/* <p className="notes">Tips: Hover the legend !</p> */}
      </div>
      </React.Fragment>
    );
  }
}
