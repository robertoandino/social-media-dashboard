import React, { useState } from 'react';
import botRed from '../pics/bots-red.svg';
import botYellow from '../pics/bots-yellow.svg';
import botPurple from '../pics/bots-purple.svg';

function Navbar() {
    const [activeBot, setActiveBot] = useState(null);

    const handleBotClick = (bot) => {
        setActiveBot(bot);
        setTimeout(() => setActiveBot(null), 5000);
    }

    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
            
            {/**Bots*/}
            <div className="flex-grow mx-8 flex space-x-4 items-center">
                <button 
                    className="hover:scale-110 transition-transform"
                    onClick={() => handleBotClick('red')}
                >
                    <img src={botRed} alt="Red Bot" className="h-20 w-auto"/>
                </button>
                <button 
                    className="hover:scale-110 transition-transform"
                    onClick={() => handleBotClick('purple')}
                >
                    <img src={botPurple} alt="Purple Bot" className="h-20 w-auto"/>
                </button>
                <button 
                    className="hover:scale-110 transition-transform"
                    onClick={() => handleBotClick('yellow')}    
                >
                    <img src={botYellow} alt="Yellow Bot" className="h-20 w-auto"/>
                </button>
            </div>

            {/**Right Info*/}
            <div className="flex items-center space-x-4">
                <span className="text-white">John Doe</span>
                <button className="bg-blue-500 text-white p-2 rounded">Logout</button>
            </div>

            {/**Pop-up Info*/}
            {activeBot && (
                <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 p-6 bg-gray-800 rounded-lg shadow-lg animate-pop-up`}>
                    {activeBot === 'red' && (
                        <div className="text-center text-red-400">
                            <h2 className="text-2xl font-bold mb-2">🔥 Red Bot</h2>
                            <p>Your passions and goals in one place!</p>
                        </div>
                    )}
                    {activeBot === 'purple' && (
                        <div className="text-center text-purple-400">
                            <h2 className="text-2xl font-bold bm-2">💡 Purple Bot</h2>
                            <p>Let's get creative and brainstorm ideas.</p>
                        </div>
                    )}
                    {activeBot === 'yellow' && (
                        <div className="text-center text-yellow-400">
                            <h2 className="text-2xl font-bold mb-2">🌟 Yellow Bot</h2>
                            <p>Build connections and stay social!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar;