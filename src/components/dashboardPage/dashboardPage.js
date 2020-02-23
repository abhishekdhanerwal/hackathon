import React, {useState, useEffect} from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';

import { IoMdRefreshCircle } from "react-icons/io";
import CountUp from 'react-countup';
import Axios from 'axios';
import { IoMdRefresh } from "react-icons/io";
import ReactTooltip from 'react-tooltip'

import EventsBar from '../eventsBar/eventsBar';

function DashboardPage() {
    // const [totalEvent, setTotalEvent] = useState(0);
    // for(let i=0 ; i<10000 ; i++ ){
    //     setTotalEvent(i);
    // }
    const [countData, setCountData] = useState(null);
    const [refreshLine, setRefreshLine] = useState(false);
    const [refreshBarGraph, setRefreshBarGraph] = useState(false);
    const [cpuUtilizationData, setCpuUtilizationData] = useState(null);
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

        Axios.get('/dashboardReport/cpu')
        .then(function (response) {
            // handle success
            console.log(response);
            setCpuUtilizationData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[]);

    const refreshLineGraph = () => {
        setRefreshLine(true);
        Axios.get('/dashboardReport/cpu')
        .then(function (response) {
            // handle success
            console.log(response);
            setCpuUtilizationData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        setTimeout(()=>{
            setRefreshLine(false);
        },2000)
    };

    const refreshBarGraphFunc = () => {
        setRefreshBarGraph(true);
        setTimeout(()=>{
            setRefreshBarGraph(false);
        },2000)
    };

    return (
        <div className="dashboard">
            <ReactTooltip />
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
            <div className="info">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><p>Execution Engine Statistics</p></div>
                    <div className="col-md-4"><p data-tip="Refresh" style={{float:'right', cursor:'pointer'}} onClick={refreshBarGraphFunc}><IoMdRefresh /></p></div>
                </div>
                <div className="row" style={{marginBottom:'15px'}}>
                    <div className="col-md-6"></div>
                    <div className="col-md-6" style={{display: 'flex',flexDirection: 'row-reverse'}}>
                        <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Hourly</button>
                        <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Day</button>
                        <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Week</button>
                        <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Month</button>
                    </div>                
                </div> 
                <EventsBar refreshBarGraph={refreshBarGraph} />
            </div>
            <div className="graph1">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><p>CPU Utilization</p></div>
                    <div className="col-md-4"><p data-tip="Refresh" style={{float:'right', cursor:'pointer'}} onClick={refreshLineGraph}><IoMdRefresh /></p></div>
                </div>
                <div className="row" style={{marginBottom:'15px'}}>
                    <div className="col-md-6"></div>
                    <div className="col-md-6" style={{display: 'flex',flexDirection: 'row-reverse'}}>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Hourly</button>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Day</button>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Week</button>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Month</button>
                    </div>
                    
                </div> 
            <LineChart refresh={refreshLine} cpuUtilizationData={cpuUtilizationData} />
            </div>
            <div className="graph2">
            <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6"><p>Memory Utilization</p></div>
                    <div className="col-md-4"><p data-tip="Refresh" style={{float:'right', cursor:'pointer'}}><IoMdRefresh /></p></div>
                </div>
                <div className="row" style={{marginBottom:'15px'}}>
                    <div className="col-md-6"></div>
                    <div className="col-md-6" style={{display: 'flex',flexDirection: 'row-reverse'}}>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Hourly</button>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Day</button>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Week</button>
                    <button className="btn btn-sm btn-outline-secondary" style={{fontSize:'8px', height:'22px'}}>Month</button>
                    </div>
                </div> 
            <BarChart />
            </div>
        </div>
    );
}

export default DashboardPage;