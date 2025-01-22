import React, { useState } from 'react';
import botRed from '../pics/bots-red.svg';
import botYellow from '../pics/bots-yellow.svg';
import botPurple from '../pics/bots-purple.svg';

function Navbar() {

    return (
        <div className="relative flex justify-between items-center p-4 bg-gray-800 shadow-md">
            
            {/**Bots*/}
            <div className="flex-grow mx-8 flex space-x-4 items-center">
                <div className="hover:scale-110 transition-transform">
                    <img src={botRed} alt="Red Bot" className="h-20 w-auto"/>
                </div>
                <div className="hover:scale-110 transition-transform">
                    <img src={botPurple} alt="Purple Bot" className="h-20 w-auto"/>
                </div>
                <div className="hover:scale-110 transition-transform">
                    <img src={botYellow} alt="Yellow Bot" className="h-20 w-auto"/>
                </div>
            </div>
        
            {/**Right Info*/}
            <div className="flex items-center space-x-4">
                <span className="text-white">John Doe</span>
                <button  className="bg-gray-900 text-gray-300 font-semibold px-4 py-2 rounded-lg
                            hover:bg-red-600 hover:scale-105 transition-all duration-200 
                            ease-in-out focus:ring focus:ring-gray-600"
                >
                    Logout
                </button>
            </div>

        </div>
    );
}

export default Navbar;