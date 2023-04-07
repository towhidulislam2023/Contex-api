import React from 'react';
import Cousin1 from '../Cousin1/Cousin1';
import Cousin2 from '../Cousin2/Cousin2';

const Anty = () => {
    return (
        <div className='border-2 p-6'>
            <h1 className="text-4xl font-bold">Anty</h1>
            <div className="flex gap-10 my-10">
                <Cousin1></Cousin1>
                <Cousin2></Cousin2>
            </div>
        </div>
    );
};

export default Anty;