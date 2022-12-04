import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const EmergencyOnOff = () => {

 
    const [curAvailableCapacity, setCurAvailableCapacity] = useState ("")



    var MingRigSubmisiionData = {


        "CurAvailableCapacity" : curAvailableCapacity
    
    }
    var dataToSend = JSON.stringify(MingRigSubmisiionData);
    var apiToCall = "http://127.0.0.1:5000/run_by_power/"+curAvailableCapacity.toString();


    function shutdownall(){
        

        axios.get("http://127.0.0.1:5000/machines_shut_down/")
        .then(res => {
            
        
          
            //console.log('Axios')
            //console.log(typeof(kkk.data),".data")
            //console.log(kkk.data)
            //console.log(kkk.data.results,".result")
            //console.log(typeof(kkk.data.results))
           
            //console.log(testrows,".testrows")
            alert ("Shuting Down All Rigs !" )
          
  
          }
        )

       

      

    }

    function turnonallrigs(){
        

        axios.get("http://127.0.0.1:5000/machines_turn_on_all/")
        .then(res => {
            
        
          
            //console.log('Axios')
            //console.log(typeof(kkk.data),".data")
            //console.log(kkk.data)
            //console.log(kkk.data.results,".result")
            //console.log(typeof(kkk.data.results))
           
            //console.log(testrows,".testrows")
            alert ("Turning On All Rigs !" )
          
  
          }
        )
      

    }
  

    
    return (
        <>
            <form>

         
                
                <br />
               
                <label>
                    Manager Override Dev Mode :
                    
                  
                </label>
                <br />
                
                <button 
                    onClick={shutdownall}
                    >Shut Down All Rigs</button>
                    <br />
                    <br />
                    <button 
                    onClick={turnonallrigs}
                    >Turn On All Rigs</button>
            </form>
        </>
    )
}