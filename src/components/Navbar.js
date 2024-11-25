import React, { useState } from 'react';
import botRed from '../pics/bots-red.svg';
import botYellow from '../pics/bots-yellow.svg';
import botPurple from '../pics/bots-purple.svg';
import Ai from './Ai';

function Navbar() {
    const [activeBot, setActiveBot] = useState(null);

    const toggleBot = (bot) => {
        setActiveBot((prev) => (prev === bot ? null : bot))
    }

    return (
        <div className="relative flex justify-between items-center p-4 bg-gray-800 shadow-md">
            
            {/**Bots*/}
            <div className="flex-grow mx-8 flex space-x-4 items-center">
                <button 
                    className="hover:scale-110 transition-transform"
                    onClick={() => toggleBot('red')}
                >
                    <img src={botRed} alt="Red Bot" className="h-20 w-auto"/>
                </button>
                <button 
                    className="hover:scale-110 transition-transform"
                    onClick={() => toggleBot('purple')}
                >
                    <img src={botPurple} alt="Purple Bot" className="h-20 w-auto"/>
                </button>
                <button 
                    className="hover:scale-110 transition-transform"
                    onClick={() => toggleBot('yellow')}    
                >
                    <img src={botYellow} alt="Yellow Bot" className="h-20 w-auto"/>
                </button>
            </div>
        
            {/**Right Info*/}
            <div className="flex items-center space-x-4">
                <span className="text-white">John Doe</span>
                <button className="bg-blue-500 text-white p-2 rounded">Logout</button>
            </div>

            {/**Ai*/}
            {activeBot && (
                <Ai activeBot={activeBot} setActiveBot={setActiveBot}/>
            )}
        </div>
    );
}

export default Navbar;