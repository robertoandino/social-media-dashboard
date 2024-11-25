import React, { useState } from 'react';
import botRed from '../pics/bots-red.svg';
import botYellow from '../pics/bots-yellow.svg';
import botPurple from '../pics/bots-purple.svg';

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

            {/**AI Textbox*/}
            {activeBot && (
                <div
                    className="absolute top-24 left-1/2 transform -translate-x-1/2
                            flex items-center space-x-4"
                >
                    {/**Circle*/}
                    <div 
                        className={`w-16 h-16 rounded-full animate-pulse 
                            ${
                                activeBot === 'red'
                                    ? ' bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500'
                                    : activeBot === 'purple'
                                    ? 'bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500'
                                    : 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-green-500'
                            } 
                        shadow-xl`}
                        style={{
                            boxShadow: `0 0 15px 4{
                                activeBot === 'red'
                                    ? '#ff4500'
                                    : activeBot === 'purple'
                                    ? '#fb68ee'
                                    : '#ffd700'
                            }`,
                        }}
                    ></div>
                    
                    {/**Textbox*/}
                    <div
                        className={`p-4 rounded-lg shadow-lg transition-transform
                            ${
                                activeBot === 'red'
                                    ? 'bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white'
                                    : activeBot === 'purple'
                                    ? 'bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 text-white'
                                    : 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-green-500 text-black'
                            }   
                        `}
                        
                    >
                        <h3 className="text-lg font-bold">
                            {activeBot === 'red' ? 'Red AI Bot' : activeBot === 'purple' 
                                ? 'Purple AI Bot' : 'Yellow AI Bot' }
                        </h3>
                        <p className="mt-2 text-sm">
                            {activeBot === 'red'
                                ? "Hi! I'm Red, always ready to assist you with social tasks."
                                : activeBot === 'purple'
                                ? "Hello! I'm Purple, here to help with analytics and insights."
                                : "Hey there! I'm Yellow, let's get creative together."
                            }
                        </p>
                    </div>
                </div>
            )}
        
            {/**Right Info*/}
            <div className="flex items-center space-x-4">
                <span className="text-white">John Doe</span>
                <button className="bg-blue-500 text-white p-2 rounded">Logout</button>
            </div>

        </div>
    );
}

export default Navbar;