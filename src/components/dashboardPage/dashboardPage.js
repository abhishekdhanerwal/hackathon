import React, {useState, useEffect} from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';

import { IoMdRefreshCircle } from "react-icons/io";
import CountUp from 'react-countup';
import Axios from 'axios';

function DashboardPage() {
    // const [totalEvent, setTotalEvent] = useState(0);
    // for(let i=0 ; i<10000 ; i++ ){
    //     setTotalEvent(i);
    // }
    const [countData, setCountData] = useState(null);
    useEffect(() => {
        Axios.get('/dashboardReport/counts')
        .then(function (response) {
            // handle success
            console.log(response);
            setCountData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[]);
    return (
        <div className="dashboard">
            <div className="info">Welcome to Dashboard</div>
            <div className="box1">
                <p>Total Events</p>
                <p className="p1">
                <CountUp start={0} end={countData ? countData.total : 0} delay={0}>
                {({ countUpRef }) => (
                    <span ref={countUpRef} />
                )}
                </CountUp>
                </p>
            </div>
            <div className="box2">
                <p>Success Events</p>
                <p className="p2"><CountUp start={0} end={countData ? countData.pass : 0} delay={0}>
                {({ countUpRef }) => (
                    <span ref={countUpRef} />
                )}
                </CountUp></p></div>
            <div className="box3">
                <p>Failed Events</p>
                <p className="p3"><CountUp start={0} end={countData ? countData.failed : 0} delay={0}>
                {({ countUpRef }) => (
                    <span ref={countUpRef} />
                )}
                </CountUp></p>
            </div>
            <div className="box4">
                <p>Pending Events</p>
                <p className="p4"><CountUp start={0} end={countData ? countData.pending : 0} delay={0}>
                {({ countUpRef }) => (
                    <span ref={countUpRef} />
                )}
                </CountUp></p>
            </div>
            <div className="graph1">
            <p>CPU Utilization</p>
            <LineChart />
            </div>
            <div className="graph2">
            <p>Memory Utilization</p>
            <BarChart />
            </div>
        </div>
    );
}

export default DashboardPage;