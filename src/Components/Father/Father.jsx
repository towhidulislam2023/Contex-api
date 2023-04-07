import React, { useContext } from 'react';
import Ami from '../Ami/Ami';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { GiveMoneyGranpaContext } from '../GrandPa/GrandPa';

const Father = () => {
    const [money,setmoney]=useContext(GiveMoneyGranpaContext)
    return (
        <div className='border-2 p-6'>
            <h1 className='text-4xl font-bold'>Father</h1>
            <p> GrandPa has <span className='text-red-600'> {money} </span>taka </p>
            <button onClick={() => setmoney(money+1000)} className='my-3'>Send Money grandpa</button>
            <div className='flex gap-10 my-10'>
                <Ami></Ami>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;