import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import React, { useState, useEffect, Button } from 'react'
const List = () => {

  const [testrows, setTestrows] = useState([])



  useEffect (() => {


    axios.get("http://127.0.0.1:5000/data")
      .then(kkk => {
          
      
        
          //console.log('Axios')
          //console.log(typeof(kkk.data),".data")
          //console.log(kkk.data)
          //console.log(kkk.data.results,".result")
          //console.log(typeof(kkk.data.results))
          setTestrows(kkk.data.results)
          //console.log(testrows,".testrows")
        

        }
      )


      



  }, [])


  


  const rows = [
    {
      minerId: 1,
      brand: "Antiner",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      model: "S19 XP",
      monitoringTime: "11/01/2022 13:05",
      currStatus: "On",
      currPower: 3000.0,
      curHashRate: 140.0,
      curPowerRatio: 20.8 + " J/T",
      ratedPower: 3000,
      ratedHashRate: 141.0,
      ratedPowerRatio: 20.5 + " J/T"
    },
    {
      minerId: 2,
      brand: "Antiner",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      model: "S19",
      monitoringTime: "11/01/2022 13:10",
      currStatus: "Off",
      currPower: 3400,
      curHashRate: 98.0,
      curPowerRatio: 31.5 + " J/T",
      ratedPower: 3250.0,
      ratedHashRate: 100.0,
      ratedPowerRatio: 29.5 + " J/T"
    },
    
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Miner ID</TableCell>
            <TableCell className="tableCell">Brand</TableCell>
            <TableCell className="tableCell">Model</TableCell>
            <TableCell className="tableCell">Monitoring Time</TableCell>
            <TableCell className="tableCell">Cur Status</TableCell>
            <TableCell className="tableCell">Cur Power</TableCell>
            <TableCell className="tableCell">Cur Hash Rate</TableCell>
            <TableCell className="tableCell">Cur Power Ratio</TableCell>
            <TableCell className="tableCell">Rated Power</TableCell>
            <TableCell className="tableCell">Rated Hash Rate</TableCell>
            <TableCell className="tableCell">Rated Power Ratio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testrows.map((row) => (
            <TableRow key={row.minerId}>
              <TableCell className="tableCell">{row.minerID}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={"https://m.media-amazon.com/images/I/61DUyouezEL._AC_SL1430_.jpg"} alt="" className="image" />
                  {row.brand}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.model}</TableCell>
              <TableCell className="tableCell">{row.monitoringTime}</TableCell>
              <TableCell className="tableCell"><span className={`currStatus ${row.curStatus}`}>{row.curStatus}</span></TableCell>
              <TableCell className="tableCell">{row.curPower}</TableCell>
              <TableCell className="tableCell">{row.curHashRate}</TableCell>
              <TableCell className="tableCell">{row.curPowerRatio}</TableCell>
              <TableCell className="tableCell">{row.ratedPower}</TableCell>
              <TableCell className="tableCell">{row.ratedHashRate}</TableCell>
              <TableCell className="tableCell">{row.ratedPowerRatio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;