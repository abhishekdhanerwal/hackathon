import React from 'react';
import Sidebar from '../sidebar/sidebar';

function Layout(){
    return (
        <div className="main-div">
            <div className="header">Header</div>
            <Sidebar/>
            <div className="main-content">
                <div className="card">Card 1</div>
            </div>
        </div>
    )
}

export default Layout;