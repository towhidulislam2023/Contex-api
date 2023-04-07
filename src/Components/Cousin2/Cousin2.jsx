import React, { useContext } from 'react';
import { ringContext } from '../GrandPa/GrandPa';

const Cousin2 = () => {
    const ring=useContext(ringContext)
    return (
        <div className='border-2 p-6'>
            <h1 className="text-4xl font-bold">Cousin2</h1>
            <p>I have ring called :{ring}:</p>
            
        </div>
    );
};

export default Cousin2;