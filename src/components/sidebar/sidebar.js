import React from 'react';
import {
    Link
} from "react-router-dom";


function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebarlist">
                <Link to="/" className="item active"><li>Dashboard</li></Link>
                <Link to="/monitor" className="item"><li >Health/Monitoring</li></Link>
                <Link to="/reports" className="item"><li>Reports</li></Link>
                <Link to="/logs" className="item"><li>Logs</li></Link>
            </ul>
        </div>
    );
}

export default Sidebar;