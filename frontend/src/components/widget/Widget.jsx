import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 99.11;
  const diff = 20;
  const curTotalMws = 15;

  const [curTotalPower, setCurTotalPower] = useState (0)
  const [curPofhashrate, setCurPofhashrate] = useState (0)
  const [curPofoOnline, setCurPofoOnline] = useState (0)

  useEffect (() => {


    axios.get("http://127.0.0.1:5000/total_curpower/")
    .then(res => {
        
    
      
        console.log(res.data)
        //console.log(typeof(kkk.data),".data")
        //console.log(kkk.data)
        //console.log(kkk.data.results,".result")
        //console.log(typeof(kkk.data.results))
        setCurTotalPower(res.data)
        //console.log(testrows,".testrows")

  
      }
    )
    axios.get("http://127.0.0.1:5000/curhash_ratedhash/")
    .then(res => {
        
    
      
        console.log(res.data)
        //console.log(typeof(kkk.data),".data")
        //console.log(kkk.data)
        //console.log(kkk.data.results,".result")
        //console.log(typeof(kkk.data.results))
        setCurPofhashrate(res.data*100)
        //console.log(testrows,".testrows")

  
      }
    )
    axios.get("http://127.0.0.1:5000/p_of_r//")
    .then(res => {
        
    
      
        console.log(res.data)
        //console.log(typeof(kkk.data),".data")
        //console.log(kkk.data)
        //console.log(kkk.data.results,".result")
        //console.log(typeof(kkk.data.results))
        setCurPofoOnline(res.data*100)
        //console.log(testrows,".testrows")

  
      }
    )



  }, [])


 





  


  switch (type) {
    case "user":
      data = {
        title: "Online Rate %",
        isMoney: false,
        link: "Details",
        amount: curPofoOnline,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Qualified rate %",
        isMoney: false,
        link: "Details",
        amount:curPofoOnline,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Percentage of HashRate",
        isMoney: false,
        link: "Details",
        amount: curPofhashrate,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "currentMws":
      data = {
        title: "Current KWs",
        isMoney: true,
        link: "Details",
        amount: curTotalPower/1000,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "="} {data.amount} 
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
         
        </div>
      
      </div>
    </div>
  );
};

export default Widget;
