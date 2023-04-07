import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncal from '../Uncle/Uncal';
import Anty from '../Anty/Anty';
export const ringContext = createContext('gold')
export const GiveMoneyGranpaContext = createContext(0)
export const TakeMonyFromGrandpaContext = createContext(0)
const GrandPa = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='w-fit'>
            <h1 className='text-4xl'>GrandPa</h1>
            <p><small>Grandpa has "{money}" taka </small></p>
            <TakeMonyFromGrandpaContext.Provider value={[money, setMoney]}>
                <GiveMoneyGranpaContext.Provider value={[money, setMoney]}>
                    <ringContext.Provider value='golden chain'>
                        <div className='flex gap-10 my-10 w-fit'>
                            <Father></Father>
                            <Uncal></Uncal>
                            <Anty></Anty>
                        </div>
                    </ringContext.Provider>
                </GiveMoneyGranpaContext.Provider>
            </TakeMonyFromGrandpaContext.Provider>


        </div>
    );
};

export default GrandPa;