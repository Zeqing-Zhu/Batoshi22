import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Button } from 'react'

function App() {

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
/*
  useEffect (() => {
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



  }, [])
  */






  return (
    <div className="App">
      
      <header className="App-header">
      
        <p>
          BATOSHI is Loaded
          </p>
        <p>  
          Please click the button to request info.
        </p>
        
        <p>Mining Rig ID : {data.ID}</p>
        <p>Mining Rig Model : {data.Model}</p>
        <p>Mining Rig HashRate : {data.HashRate}</p>
        <p>Mining Rig Power : {data.Power}</p>
        <p>Mining Rig InstalledDate : {data.InstalledDate}</p>

        <button onClick={requestMinerInfo}>Request Mining Rig Info</button>
        
        <a
          className="App-link"
          href="https://satoshion.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try BATOSHI
        </a>
       

      


      </header>
      

      
    </div>

  );
}

export default App;
