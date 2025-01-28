import React from 'react';

function Sidebar({ onNavigate}) {
    return (
        <div className="bg-gray-900 text-white w-64 h-screen p-5">
            <h2 className="text-xl font-bold mb-6">3Bots</h2>
            <nav>
                <ul>
                    <li className="mb-4">
                        <button
                            onClick={() => onNavigate('home')}
                            className="hover:text-blue-500 w-full text-left"
                        >
                            Home
                        </button>
                    </li>
                    <li className="mb-4">
                        <button
                            onClick={() => onNavigate('profile')}
                            className="hover:text-blue-500 w-full text-left"
                        >
                            Profile
                        </button>
                    </li>
                    <li className="mb-4">
                        <button
                            onClick={() => onNavigate('AI')}
                            className="hover:text-blue-500 w-full text-left"
                        >
                            AI
                        </button>
                    </li>
                    <li className="mb-4">
                        <button
                            onClick={() => onNavigate('settings')}
                            className="hover:text-blue-500 w-full text-left"
                        >
                            Settings
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;