import React, { useContext, useState } from 'react';
import { TakeMonyFromGrandpaContext } from '../GrandPa/GrandPa';

const Ami = () => {
    const [mymoney,setMymony]=useState(0)
    const [money,setMoney]=useContext(TakeMonyFromGrandpaContext)
    return (
        <div className='border-2 p-6'>
            <h1 className='text-4xl font-bold'>Ami</h1>
            TotalTaka {mymoney}
            <button onClick={() =>{ 
                setMoney(money ? money - 200 : money)
                setMymony(money ? mymoney + 200 : mymoney)
            
            }}>Take From Grandpa(200)</button>
            
        </div>
    );
};

export default Ami;