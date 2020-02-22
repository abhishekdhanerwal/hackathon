import React from 'react';

function dashboard() {
    return (
        <div className="dashboard">

            {/* <div className="row"> */}
                <div className="info">
                    Welcome to Dashboard
            {/* </div> */}
            </div>
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
            <div className="graph1"></div>
            <div className="graph2"></div>
        </div>
    );
}

export default dashboard;