import React from "react";
import "./States.css";

import linkdao from "../../../../assets/linkdao.png";
import pancakeswap from "../../../../assets/pancakeswap.png";
import lbank from "../../../../assets/lbank.png";
import bitmart from "../../../../assets/bitmart.png";
import info from "../../../../assets/info.png";
import search from "../../../../assets/search.png";

function States() {
  return (
    <div className="states">
      <div className="states-banner">
        <div className="states-banner-item">
          <div className="states-banner-item-logo">
            <img src={linkdao} alt="" />
          </div>
          <div className="states-banner-item-content">
            <h5>LinkDao Network (LKD)</h5>
            <h3>0.5969 USD</h3>
          </div>
        </div>
        <div className="states-banner-item">
          <div className="states-banner-item-logo">
            <img src={pancakeswap} alt="" />
          </div>
          <div className="states-banner-item-content">
            <h5>Pancakeswap price</h5>
            <h3>0.5969 USD</h3>
          </div>
        </div>
        <div className="states-banner-item">
          <div className="states-banner-item-logo">
            <img src={lbank} alt="" />
          </div>
          <div className="states-banner-item-content">
            <h5>LBank price</h5>
            <h3>0.5969 USD</h3>
          </div>
        </div>
        <div className="states-banner-item">
          <div className="states-banner-item-logo">
            <img src={bitmart} alt="" />
          </div>
          <div className="states-banner-item-content">
            <h5>Bitmart price</h5>
            <h3>0.5969 USD</h3>
          </div>
        </div>
      </div>
      <div className="states-action">
        <div className="states-action-trade">
          <input
            type="text"
            placeholder="Enter target price to be achieved here"
          />
          <button>Trade</button>
          <img src={info} alt="" />
        </div>
        <div className="states-action-trade">
          <input
            type="text"
            placeholder="Enter target volume to be achieved here"
          />
          <button>Trade</button>
          <img src={info} alt="" />
        </div>
      </div>
      <div className="states-history">
        <input type="text" placeholder="Search data here" />
        <table>
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>From account</td>
              <td>To account</td>
              <td>Time</td>
              <td>Amount</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>22:10:40</td>
              <td>0.5000$</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>22:10:40</td>
              <td>0.5000$</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>22:10:40</td>
              <td>0.5000$</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>4</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>0xE62e1503D5ef5B405443860490acA5Eacb15ebEe</td>
              <td>22:10:40</td>
              <td>0.5000$</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default States;
