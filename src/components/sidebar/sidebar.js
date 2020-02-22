import React from 'react';
import {
    Link
} from "react-router-dom";

function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebarlist">
                <Link to="/"><li className="item active">Dashboard</li></Link>
                <Link to="/monitor"><li className="item">Health/Monitoring</li></Link>
                <Link to="/reports">><li className="item">Reports</li></Link>
                <Link to="/logs">><li className="item">Logs</li></Link>
            </ul>
        </div>
    );
}

export default Sidebar;