import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const SubmitCapacity = () => {

 
    const [curAvailableCapacity, setCurAvailableCapacity] = useState ("")



    var MingRigSubmisiionData = {


        "CurAvailableCapacity" : curAvailableCapacity
    
    }
    var dataToSend = JSON.stringify(MingRigSubmisiionData);
    var apiToCall = "http://127.0.0.1:5000/run_by_power/"+curAvailableCapacity.toString();


    function submitAvailableCapacity(){
        alert ("Submit successful!" + apiToCall) 

        axios.get(apiToCall)
        .then(res => {
            
        
          
            //console.log('Axios')
            //console.log(typeof(kkk.data),".data")
            //console.log(kkk.data)
            //console.log(kkk.data.results,".result")
            //console.log(typeof(kkk.data.results))
           
            //console.log(testrows,".testrows")
            alert (curAvailableCapacity+"Submit successful!" + apiToCall)
          
  
          }
        )

       

      

    }
  

    
    return (
        <>
            <form>

                <p>  
                Here are the MWs you will submit:
                </p>
                
               {dataToSend}
                
                <br />
               
                <label>
                    Current Available Capacity :
                    
                    <input
                        name="curAvailableCapacity"
                        type="number"
                        //value={this.state.numberOfGuests}
                        //onChange={this.handleInputChange} 
                        onChange={(e) => setCurAvailableCapacity(e.target.value)}
            
                        />
                </label>
                <br />
                
                <button 
                    onClick={submitAvailableCapacity}
                    >Submit Available Capacity</button>
            </form>
        </>
    )
}