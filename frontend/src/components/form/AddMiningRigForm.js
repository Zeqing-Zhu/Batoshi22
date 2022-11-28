import React, { useEffect, useState } from 'react';

export const AddMiningRigForm = () => {

    const [MiningRigID, setMiningRigID] = useState ("")
    const [MiningRigModel, setMiningRigModel] = useState ("")
    const [MiningRigHashRate, setMiningRigHashRate] = useState ("")
    const [MiningRigPower, setMiningRigPower] = useState ("")
    const [MiningRigInstalledDate, setMiningRigInstalledDate] = useState ("")



    var MingRigSubmisiionData = {

        "ID": MiningRigID, 
        "HashRate": MiningRigModel, 
        "InstalledDate": MiningRigHashRate, 
        "Model": MiningRigPower, 
        "Power": MiningRigInstalledDate
    
    }
    var dataToSend = JSON.stringify(MingRigSubmisiionData);


    function addMingRig(){

        alert ("Submit successful!" + dataToSend)

      

    }
  

    
    return (
        <>
            <form>

                <p>  
                Here are the infos you will submit:
                </p>
                
               {dataToSend}
                
                <br />
               
                <label>
                    Mining Rig ID :
                    
                    <input
                        name="MiningRigID"
                        type="number"
                        //value={this.state.numberOfGuests}
                        //onChange={this.handleInputChange} 
                        onChange={(e) => setMiningRigID(e.target.value)}
            
                        />
                </label>
                <br />
                <label>
                    Mining Rig Model:
                    <input
                        name="MiningRigModel"
                        type="text"
                        //value={this.state.numberOfGuests}
                        //onChange={this.handleInputChange} 
                        onChange={(e) => setMiningRigModel(e.target.value)}
                        />
                </label>
                <br />
                <label>
                Mining Rig HashRate:
                    <input
                        name="MiningRigHashRate"
                        type="text"
                        //value={this.state.numberOfGuests}
                        //onChange={this.handleInputChange}
                        onChange={(e) => setMiningRigHashRate(e.target.value)} 
                        />
                </label>
                <br />
                <label>
                Mining Rig Power:
                    <input
                        name="MiningRigPower"
                        type="text"
                        //value={this.state.numberOfGuests}
                        //onChange={this.handleInputChange} 
                        onChange={(e) => setMiningRigPower(e.target.value)}
                        />
                </label>
                <br />
                <label>
                Mining Rig Installed Date:
                    <input
                        name="MiningRigInstalledDate"
                        type="text"
                        //value={this.state.numberOfGuests}
                        //onChange={this.handleInputChange} 
                        onChange={(e) => setMiningRigInstalledDate(e.target.value)}
                        />
                </label>
                <br />
                <button 
                    onClick={addMingRig}
                    >Submit Mining Rig Info</button>
            </form>
        </>
    )
}