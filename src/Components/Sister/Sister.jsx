import React, { useContext } from 'react';
import { ringContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const ring=useContext(ringContext)
    return (
        <div className='border-2 p-6'>
            <h1 className='text-4xl font-bold'>Sister</h1>
            <p>data From Use Contex {ring}</p>
        </div>
    );
};

export default Sister;