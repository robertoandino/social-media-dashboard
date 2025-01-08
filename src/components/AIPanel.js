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

            {/** Chat Area */}
            <div className="h-96 overflow-y-auto mb-4 rounded-lg bg-gray-700 p-4">
                {messages[activeBot].map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        {msg.sender === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r mr-2 flex items-center justify-center">
                                {botPersonalities[activeBot].avatar}
                            </div>
                        )}
                        <div className={`
                            max-w-[70%] p-3 rounded-lg
                            ${msg.sender === 'user'
                                ? 'bg-blue-600'
                                : `bg-gradient-to-r ${botPersonalities[activeBot].theme}`}   
                        `}>
                            {msg.text}
                            <div className="text-xs opacity-75 mt-1">
                                {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                )}
                <div ref={chatEndRef}></div>
            </div>
            

            
        </div>
    )
}

export default AIPanel;
