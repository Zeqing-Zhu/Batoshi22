import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./automanagement.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { SubmitCapacity } from "../../components/form/SubmitCapacity"
import React, { useState, useEffect, Button } from 'react'
import axios from 'axios';

const Automanagement = () => {

  const [data, setData] = useState([{}])
  function sayHello() {
    alert('You clicked me!');
  }

  function requestMinerInfo(){
    fetch("http://127.0.0.1:5000/data",{
      'methods' : 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  }
  function submitCapacity(){
    fetch("http://127.0.0.1:5000/data",{
      'methods' : 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  }

  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="currentMws" />
          
        </div>
        
      
        
        <a
          className="App-link"
          href="https://satoshion.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try BATOSHI
        </a>
        <>
        <SubmitCapacity/>
        </>
        <div className="charts">
         {/* <Featured />*/}
          {/*<Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />*/}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Automanagement;
