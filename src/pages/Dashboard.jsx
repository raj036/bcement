import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (

    <div>
      <header className="header-sec">
        <div className="header-wrap">
          <div className="usr-img">
            {/* <img src="user-img.jpg" alt="" className="usr-img-icn" /> */}
          </div>
        </div>
      </header>
      {/* dashboard part starts from here */}
      <div className="dashboard-page-sec">
        <div className="dashboard-wrap">
          <select name="voucher" className="voucher">
            <option value="sel-voher">Select Voucher</option>
          </select>
        </div>
        <div className="vendor-wrap">
          <select name="voucher" className="voucher">
            <option value="sel-voher">Select Vender</option>
          </select>
          <select name="voucher" className="voucher">
            <option value="sel-voher">Select Site</option>
          </select>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Bill No</th>
              <th>Sub Item</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Buying Rate</th>
              <th>Market Rate</th>
              <th>Discount</th>
              <th>Buying Amt</th>
              <th>Market Amt</th>
              <th>Bill Paid</th>
              <th>Bill Paid By</th>
            </tr>
            <tr>
              <td>01/01/98</td>
              <td>01</td>
              <td>ex</td>
              <td>ex</td>
              <td>20</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Dashboard;