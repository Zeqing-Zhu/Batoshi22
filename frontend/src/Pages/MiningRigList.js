import React, { useEffect, useState } from 'react';
import { Card } from "../Components/Cards/card"


export const MiningRigList = () => {


    const [voltage, setVoltage] = useState ([])

    useEffect(()=> {

        fetch('/api').then(response => {
            if (response.ok){
                return response.json()
            }
        }).then(data => console.log(data))

    },[])














    return (
        <>
            <Card/>
        
        </>
    )
}