import React, { useState, useRef, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import botRed from '../pics/bots-red.svg';
import botYellow from '../pics/bots-yellow.svg';
import botPurple from '../pics/bots-purple.svg';

function AIPanel(){
    
    const [messages, setMessages] = useState({
        Red: [
            { text: 'Hello! I am Red, your analytics assistant. How can I help you today?', sender: 'ai', reactions: {}, timestamp: new Date() }
        ],
        Purple: [
            { text: 'Hi there! I am Purple, your content strategy advisor. What can I do for you?', sender: 'ai', reactions: {}, timestamp: new Date() }
        ],
        Yellow: [
            { text: 'Hey! I am Yellow, your creative assistant. Ready to create something fun?', sender: 'ai', reactions: {}, timestamp: new Date() }
        ]
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

    const AIResponses = {
        'Analyze my reach': 'Sure, let me analyze your reach...',
        'Show engagement stats': 'Here are your engagement stats...',
        'Compare with last week': 'Comparing with last week...',
        'Best time to post?': 'The best time to post is...',
        'Content ideas': 'Here are some content ideas...',
        'Trending topics': 'These are the trending topics...',
        'Create a meme': 'Let\'s create a meme...',
        'Add humor to post': 'Adding humor to your post....',
        'Generate fun caption': 'Here is a fun caption...'
    };

    const botPersonalities = {
        Red: {
            avatar: botRed,
            theme: 'from-red-500 to-orange-600',
            typingSpeed: 50,
            errorMessage: 'Analytics service unavialable. Please try again later.',
            animation: 'animate-pulse'
        },
        Purple: {
            avatar: botPurple,
            theme: 'from-purple-500 to-indigo-600',
            typingSpeed: 70,
            errorMessage: 'Strategy service unavialable. Please try again later.',
            animation: 'animate-bounce'
        },
        Yellow: {
            avatar: botYellow,
            theme: 'from-yellow-400 to-orange-500',
            typingSpeed: 30,
            errorMessage: 'Creative service unavailable. Please try again later.',
            animation: 'animate-spin'
        }
    }

    //Scroll to the bottom of the chat area
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    //Scroll to the bottom whenever messages change
    useEffect(scrollToBottom, [messages]);

    //Handle sending a message
    const handleSend = (bot) => {
        if (!inputText.trim()) return;

        setMessages(prev => ({
            ...prev,
            [bot]: [...(prev[bot] || []), { text: inputText, sender: 'user', reactions: {}, timestamp: new Date() }]
        }));
        setInputText('');
        setIsTyping(true);

        //Simulating AI response
        setTimeout(() => {
            const response = AIResponses[inputText] || `${bot} AI response to: ${inputText}`;
            setMessages(prev => ({
                ...prev,
                [bot]: [...(prev[bot] || []), {
                    text: response,
                    sender: 'ai',
                    reactions: {},
                    timestamp: new Date()
                }]
            }));
            setIsTyping(false);
        }, 1000);
    };

    //Clear chat functionality
    const clearChat = (bot) => {
        setMessages(prev => ({
            ...prev,
            [bot]: []
        }));
    }

    //Add a reaction to a message
    const addReaction = (bot, messageIndex, reaction) => {
        setMessages(prev => {
            const newMessages = { ...prev }; // Copy the messages object
            const updatedBotMessages = [...newMessages[bot]]; // Copy the bot's message array
            const message = { ...updatedBotMessages[messageIndex] }; // Copy the specific message
            const updatedReactions = { ...message.reactions }; // Copy the reactions object

            // Update the reaction count immutably
            updatedReactions[reaction] = (updatedReactions[reaction] || 0) + 1;
    
            // Replace the reactions in the message
            message.reactions = updatedReactions;
    
            // Replace the updated message in the array
            updatedBotMessages[messageIndex] = message;
    
            // Replace the updated array in the bot's messages
            newMessages[bot] = updatedBotMessages;
    
            return newMessages; // Return the updated state
        });

    };

    return(
        /**Main Div*/
        <div
            className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm"
            style={{ height: "680px"}}
            role="complementary"
            aria-label="AI Chat Panel"
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
                        <img src={botPersonalities[bot].avatar} alt={`${bot} avatar`} className="w-6 h-6"/>
                        <span>{bot}</span>
                    </button>
                ))}
            </div>

            {/** Chat Area */}
            <div className="h-96 overflow-y-auto mb-4 rounded-lg bg-gray-700 p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
                {(messages[activeBot] || []).map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        {msg.sender === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r mr-2 flex items-center justify-center">
                                <img src={botPersonalities[activeBot].avatar} alt={`${activeBot} avatar`} className="w-6 h-6"/>
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
                                {msg.timestamp ? formatDistanceToNow(new Date(msg.timestamp), { addSuffix: true}) : ''}
                            </div>
                            <div className="flex space-x-2 mt-2">
                                {Object.entries(msg.reactions).map(([reaction, count]) => (
                                    <div key={reaction} className="relative">
                                        <span>{reaction}</span>
                                        <span className="absolute top-0 right-0 text-xs bg-gray-800 rounded-full px-1">{count}</span>
                                    </div>
                                ))}
                                <button onClick={() => addReaction(activeBot, idx, '👍')}>👍</button>
                                <button onClick={() => addReaction(activeBot, idx, '❤️')}>❤️</button>
                                <button onClick={() => addReaction(activeBot, idx, '😂')}>😂</button>
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

            {/** Suggestions Area */}
            <div className="flex flex-wrap gap-2 mb-4">
                {(suggestions[activeBot] || []).map((suggestion, idx) => (
                    <button
                        key={idx}
                        onClick={() => setInputText(suggestion)}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600"
                    >
                        {suggestion}
                    </button>
                ))}
            </div>
            
            {/** Input Area */}
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend(activeBot)}
                    placeholder={`Ask ${activeBot}...`}
                    className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2"
                />
                <button
                    onClick={() => handleSend(activeBot)}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
            {/** Clear Chat Button */}
            <button
                onClick={() => clearChat(activeBot)}
                className="absolute right-2 p-4 text-sm text-gray-400 hover:text-red-500"
                aria-label="Clear chat history"
            >
                Clear Chat
            </button>


        </div>
    )
}

export default AIPanel;
