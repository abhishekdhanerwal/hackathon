import React from 'react';
import DateTimePicker from 'react-datetime-picker';

function LogsPage() {
    return (
        <div className="logpage">
            <div className="info">
                Logs
            </div>
            <div className="logsearch">
                {/* <form style={{ display: "inline-block" }}>
                    <DateTimePicker style={{marginRight:"15px"}}/>
                    <DateTimePicker style={{marginRight:"15px"}}/>
                    <select className="dropdown" style={{marginRight:"15px"}}>
                        <option>Error</option>
                        <option>Info</option>
                        <option>Debug</option>
                        <option>Critical</option>
                    </select>
                    <button className="btn btn-primary">Search</button>
 
                </form> */}
                <div style={{marginBottom:"10px"}}>
                    <h4>Search Logs</h4>
                </div>
                <div className="form">
                    <div className="row" style={{marginBottom:"20px"}}>
                        <div className="form-group col-sm-4 col-md-4" style={{textAlign:"center"}}>
                            <label>From*</label>
                            <input type="datetime-local" className="form-control" id="from" />
                        </div>
                        <div className="form-group col-sm-4 col-md-4" style={{textAlign:"center"}}>
                            <label>To*</label>
                            <input type="datetime-local" className="form-control" id="to" />
                        </div>
                        <div className="form-group col-sm-4 col-md-4" style={{textAlign:"center"}}>
                            <label>Log Type</label>
                            <select className="form-control" id="logtype">
                                <option>Error</option>
                                <option>Info</option>
                                <option>Critical</option>
                                <option>Debug</option>
                                <option>All</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row" style={{marginBottom:"-20px"}}>
                        <div className="col" style={{textAlign:"center"}}>
                            <input type="button" className="btn btn-primary" value="Search logs" />
                        </div>
                    </div>
                </div>
            </div>
        <div className="tableContainer">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Timestamp</th>
                        <th scope="col">Log Type</th>
                        <th scope="col">Function Name</th>
                        <th scope="col">Error Message</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Timestamp</th>
                        <td>Log Type</td>
                        <td>Function Name</td>
                        <td>Error Message</td>
                        <td><button className="btn btn-primary">Copy log</button></td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                        <span className="page-link">
                            2
        <span className="sr-only">(current)</span>
                        </span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        </div >
    );
}

export default LogsPage;