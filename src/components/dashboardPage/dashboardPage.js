import React from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';

import { IoMdRefreshCircle } from "react-icons/io";

function DashboardPage() {
    return (
        <React.Fragment>
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">Label</div>
                        <div className="col-md-6">
                            <IoMdRefreshCircle />
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '10px' }}>
                        <button className="btn btn-sm btn-outline-secondary" style={{ fontSize: '8px', height: '22px' }}>Hourly</button>
                        <button className="btn btn-sm btn-outline-secondary" style={{ fontSize: '8px', height: '22px' }}>Day</button>
                        <button className="btn btn-sm btn-outline-secondary" style={{ fontSize: '8px', height: '22px' }}>Week</button>
                        <button className="btn btn-sm btn-outline-secondary" style={{ fontSize: '8px', height: '22px' }}>Month</button>
                    </div>
                    <div className="row">
                        <LineChart />
                    </div>
                    <div className="row">
                        Details
                        </div>
                </div>
            </div>
            <div className="card">
                <BarChart />
            </div>
            <div className="card">
                <AreaChart />
            </div>
            <div className="card">
                <PieChart />
            </div>
        </React.Fragment>
    );
}

export default DashboardPage;