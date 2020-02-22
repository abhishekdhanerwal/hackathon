import React from 'react';

function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebarlist">
                <li className="item">Dashboard</li>
                <li className="item">Health/Monitoring</li>
                <li className="item">Reports</li>
                <li className="item">Logs</li>
            </ul>
        </div>
    );
}

export default Sidebar;