import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-gray-900 text-white w-64 h-screen p-5">
            <h2 className="text-xl font-bold mb-6">3Bots</h2>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link
                            to="/"
                            className="hover:text-blue-500 w-full text-left"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link
                            to="/profile"
                            className="hover:text-blue-500 w-full text-left"
                        >
                            Profile
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link
                            tp="/AI"
                            className="hover:text-blue-500 w-full text-left"
                        >
                            AI
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link
                            to="/settings"
                            className="hover:text-blue-500 w-full text-left"
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;