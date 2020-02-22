import React from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';

function ReportsPage() {
    return (
       <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-5" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"5px"}}>
                    F<LineChart />
                </div>
                <div className="col-sm-6 col-md-5" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"5px"}}>
                <AreaChart />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-5" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"5px"}}>
                <PieChart />
                </div>
                <div className="col-sm-6 col-md-5" style={{border:"1px solid #ddd",boxShadow:"2px 2px #ddd",margin:"5px"}}>
                <BarChart />
                </div>
            </div>
       </div>
    );
}

export default ReportsPage;