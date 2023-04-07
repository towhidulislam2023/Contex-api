import React, { useContext } from 'react';
import Cousin3 from '../Cousin3/Cousin3';
import { GiveMoneyGranpaContext } from '../GrandPa/GrandPa';

const Uncal = () => {
    const [money,setMoney]=useContext(GiveMoneyGranpaContext)
    return (
        <div className='border-2 p-6'>
            <h1 className='text-4xl font-bold'>Uncle</h1>
            <p> Garndpa has <span className='text-red-600'> {money}</span> Taka</p>
            <button onClick={()=>setMoney(money+2000)}>Send 2000</button>
            <div className="flex gap-10 my-10">
                <Cousin3></Cousin3>
            </div>
            
        </div>
    );
};

export default Uncal;