import React from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';
import { IoMdRefreshCircle } from "react-icons/io";

function ReportsPage() {
    return (
       <div className="container">
            <div className="row"  style={{padding:"10px",border:"1px solid #ddd", boxShadow:"2px 2px #ddd"}}>
                <p style={{fontSize:"20px",fontWeight:"500",marginBottom:"0px"}}>Reports</p>
            </div>
            <div className="row">
                <div className="col-sm-6" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"8px",maxWidth:"523px"}}>
                    F<LineChart />
                </div>
                <div className="col-sm-6" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"8px",maxWidth:"523px"}}>
                <AreaChart />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"8px",maxWidth:"523px"}}>
                <PieChart />
                </div>
                <div className="col-sm-6" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"8px",maxWidth:"523px"}}>
                <BarChart />
                </div>
            </div>
       </div>

    );
}

export default ReportsPage;