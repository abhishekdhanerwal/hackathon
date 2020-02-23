import React,{useState, useEffect} from 'react';
import LineChart from '../lineChart/lineChart';
import BarChart from '../barChart/barChart';
import AreaChart from '../areaChart/areaChart';
import PieChart from '../pieChart/pieChart';
import { IoMdRefreshCircle } from "react-icons/io";
import Axios from 'axios';
import ReactPaginate from 'react-paginate';

function ReportsPage() {

    let PaginationLimit = [];

    const [reportList, setReportList] = useState();

    useEffect(() => {
        if(!reportList){
            Axios.get('/report/getReports')
            .then(function (response) {
                // handle success
                console.log(response);
                setReportList(response.data.slice(1,10));
                // setCpuUtilizationData(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
        } else {
            for(let i =0 ;i <Math.floor(reportList.length/10); i++ ){
                PaginationLimit.push(i);
            }
        }
        
    },[reportList])

    return (<div className="logpage">
    <div className="info">
        <p style={{fontSize:"20px",fontWeight:"500"}}>Task Reports</p>
    </div>
    
<div className="tableContainer">
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Timestamp</th>
                <th scope="col">Task Type</th>
                <th scope="col">Start Time</th>
                <th scope="col">Status</th>
                {/* <th scope="col"></th> */}
            </tr>
        </thead>
        <tbody>
    
            {reportList ? reportList.map((element) => {
               return (<tr key={element._id}>
                <th>{`${new Date(element.timeStamp).getDate()}-${new Date(element.timeStamp).getMonth()}- ${new Date(element.timeStamp).getFullYear()}` }</th>
               <td>{element.metadata.type}</td>
                <td>23-02-2020</td>
                <td>{element.Status}</td>
                {/* <td><button className="btn btn-primary">Copy log</button></td> */}
            </tr>);
            }) : null}
        </tbody>
    </table>
    
</div>
</div >
);
}

export default ReportsPage;