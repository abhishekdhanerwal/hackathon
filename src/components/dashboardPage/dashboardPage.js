import React from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';

import { IoMdRefreshCircle } from "react-icons/io";

function DashboardPage() {
    return (
        <div className="dashboard">
            <div className="info">Welcome to Dashboard</div>
            <div className="box1">
                <p>Total Hits</p>
                <p className="p1">1000</p>
            </div>
            <div className="box2">
                <p>Total Hits</p>
                <p className="p2">1000</p></div>
            <div className="box3">
                <p>Total Hits</p>
                <p className="p3">1000</p>
            </div>
            <div className="box4">
                <p>Total Hits</p>
                <p className="p4">1000</p>
            </div>
            <div className="graph1">
            <LineChart />
            </div>
            <div className="graph2">
            <BarChart />
            </div>
        </div>
    );
}

export default DashboardPage;