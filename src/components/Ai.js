import React from 'react';
import Draggable from 'react-draggable';

function Ai({ activeBot, setActiveBot }){
    
    return(
        <Draggable>
            <div
                className="absolute top-24 left-1/2 transform -translate-x-1/2
                            flex flex-col items-center space-y-4"
                style={{ zIndex: 50 }}
            >
                {/**Circle*/}
                <div className="relative">
                    <div
                        className={`w-16 h-16 rounded-full animate-pulse cursor-move
                            ${
                                activeBot === 'red'
                                    ? 'bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500'
                                    : activeBot === 'purple'
                                    ? 'bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500'
                                    : 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-green-500'
                            } shadow-xl`}
                        style={{
                            boxShadow: `0 0 15px ${
                                activeBot === 'red'
                                    ? '#ff4500'
                                    : activeBot === 'purple'
                                    ? '#fb68ee'
                                    : '#ffd700'
                            }`,
                        }}
                    ></div>

                    {/**Close Butoon*/}
                    <button
                        onClick={() => setActiveBot(null)}
                        className="absolute -top-4 -right-4 bg-gray-800 text-white
                                    text-sm p-1 rounded-full hover:bg-gray-600"
                    >
                        ✕
                    </button>
                </div>

                {/**AI Desc*/}
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
                            ? "Hi! I'm Red, always ready to assist with social tasks."
                            : activeBot === 'purple'
                            ? "Hello! I'm Purple, here to help with analytics and insights."
                            : "Hey there! I'm Yellow, let's get creative together."
                        }
                    </p>
                </div>
                
                {/**User Input*/}
                <input
                    type="text"
                    placeholder="Ask me anything..."
                    className={`w-64 p-4 rounded-lg shadow-lg outline-none text-sm transition-transform
                        ${
                            activeBot === 'red'
                                ? 'bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white'
                                : activeBot === 'purple'
                                ? 'bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 text-white'
                                : 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-green-500 text-black'
                        } focus:ring-2 focus:ring-offset-2 focus:ring-white`}
                />
                
                {/**AI Response*/}
                <div
                    className={`w-64 p-3 rounded-lg shadow-lg transition-transform
                        ${
                            activeBot === 'red'
                                ? 'bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white'
                                : activeBot === 'purple'
                                ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white'
                                : 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-green-500 text-black'
                        }`}
                >
                    <p className="text-sm italic">AI Response here...</p>
                </div>
            </div>
        </Draggable>
    );
}

export default Ai;

