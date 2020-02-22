import React from 'react';
import Sidebar from '../sidebar/sidebar';

import {Route, Switch, Redirect} from 'react-router-dom';

import DashboardPage from '../dashboardPage/dashboardPage';
import MonitorPage from '../monitorPage/monitorPage';
import ReportPage from '../reportPage/reportPage';
import LogsPage from '../logsPage/logsPage';

function Layout(){
    let routes = (
        <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/monitor" exact component={MonitorPage} />
            <Route path="/reports" exact component={ReportPage} />
            <Route path="/logs" exact component={LogsPage} />
            <Redirect to="/" exact component={DashboardPage} />
        </Switch>
    );

    return (
        <div className="main-div">
            <div className="header">
                <span className="logo">Team X Diff</span>
            </div>
            <Sidebar/>
            <div className="main-content">
                {routes}
            </div>
        </div>
    )
}

export default Layout;