import React, { useState, useRef, useEffect } from 'react';

function AIPanel(){
    
    const [messages, setMessages] = useState({
        Red: [],
        Purple: [],
        Yellow: []
    });

    const [activeBot, setActiveBot] = useState('Red');
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const suggestions = {
        Red: ['Analyze my reach', 'Show engagement stats', 'Compare with last week'],
        Purple: ['Best time to post?', 'Content ideas', 'Trending topics'],
        Yellow: ['Create a meme', 'Add humor to post', 'Generate fun caption']
    };

    const botPersonalities = {
        Red: {
            avatar: '📊',
            theme: 'from-red-500 to-orange-600'
        },
        Purple: {
            avatar: '🎯',
            theme: 'from-purple-500 to-indigo-600'
        },
        Yellow: {
            avatar: '😊',
            theme: 'from-yellow-400 to-orange-500'
        }
    }

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSend = (bot) => {
        if (!inputText.trim()) return;

        setMessages(prev => ({
            ...prev,
            [bot]: [...prev[bot], { text: inputText, sender: 'user'}]
        }))
        
        setInputText('');

        //Simulating AI response
        setTimeout(() => {
            setMessages(prev => ({
                ...prev,
                [bot]: [...prev[bot], {
                    text: `${bot} AI response to: ${inputText}`,
                    sender: 'ai'
                }]
            }));
        }, 1000);

    }

    return(
        /**Main Div*/
        <div
            className="relative bg-gray-700 text-white p-6 rounded-lg shadow-lg max-w-sm"
            style={{ height: "650px"}}
        >
            {/** Bot Selection Tabs */}
            <div className="flex space-x-2 mb-6">
                {Object.keys(botPersonalities).map(bot => (
                    <button
                        key={bot}
                        onClick={() => setActiveBot(bot)}
                        className={`
                            flex items-center space-x-2 px-4 py-2 rounded-lg
                            ${activeBot === bot
                                ? `bg-gradient-to-r ${botPersonalities[bot].theme}`
                                : 'bg-gray-600'
                            }
                            `}
                    >
                        <span>{botPersonalities[bot].avatar}</span>
                        <span>{bot}</span>
                    </button>
                ))}
            </div>

            {/**AI Insights*/}
            <div className="p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-bold mb-6">AI Insights</h2>
                <ul>
                    <li className="text-md text-gray-300 mb-6">
                        <strong className="text-red-400">Red:</strong> "Your last post gained 10% more likes than average!"
                    </li>
                    <li className="text-md text-gray-300 mb-6">
                        <strong className="text-purple-400">Purple:</strong> "Aalytics show your most active time is 6 PM."
                    </li>
                    <li className="text-md text-gray-300 mb-6">
                        <strong className="text-yellow-400">Yellow:</strong> "Want to create a meme? I can help!"
                    </li>
                </ul>
            </div>

            {/**Quick Chat*/}
            <div className="p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-6">Ask AI</h2>
                <div className="space-y-6">
                    {["Red", "Purple", "Yellow"].map((bot, index) => (
                        <div key={index} className="flex items-center space-x-4">

                            <span className={
                                `p-2 rounded-full animate-pulse bg-gradient-to-r
                                ${bot === 'Red' ? 'from-yellow-500 via-orange-500 to-red-500' :
                                  bot === 'Purple' ? 'from-purple-500 via-indigo-400 to-indigo-400' : 
                                  'from-yellow-500 via-yellow-400 to-green-300'
                                }`}
                            ></span>
                            
                            <input
                                type="text"
                                placeholder={`Ask ${bot}...`}
                                className={
                                    `w-full p-2 text-white placeholder-white rounded-lg bg-gradient-to-r 
                                    ${bot === 'Red' ? 'from-yellow-500 via-orange-500 to-red-500' :
                                      bot === 'Purple' ? 'from-purple-500 via-indigo-400 to-indigo-400' : 
                                      'from-yellow-500 via-yellow-400 to-green-300'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AIPanel;
