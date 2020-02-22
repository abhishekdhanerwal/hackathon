import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";

function Sidebar(){
    const [dashClass, setDashClass] = useState("item active");
    const [repClass, setRepClass] = useState("item");
    const [logClass, setLogClass] = useState("item");

    const activeSidebar = (event) => {
        console.log(event);
        if(event === 'dashClass')
            setDashClass("item active");
        else
            setDashClass("item");
        if(event === 'repClass')
            setRepClass("item active");
        else
            setRepClass("item");
        if(event === 'logClass')
            setLogClass("item active");
        else
            setLogClass("item");
    }
    return(
        <div className="sidebar">
            <ul className="sidebarlist">
                <Link to="/" className={dashClass} onClick={() => activeSidebar('dashClass')}><li>Dashboard</li></Link>
                {/* <Link to="/monitor" className={dashClass} onClick={() => activeSidebar('asd')}><li >Health/Monitoring</li></Link> */}
                <Link to="/reports" className={repClass} onClick={() => activeSidebar('repClass')}><li>Reports</li></Link>
                <Link to="/logs" className={logClass} onClick={() => activeSidebar('logClass')}><li>Logs</li></Link>
            </ul>
        </div>
    );
}

export default Sidebar;