import React from 'react';
import botRed from '../pics/bots-red.svg';
import botYellow from '../pics/bots-yellow.svg';
import botPurple from '../pics/bots-purple.svg';

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
            <div className="flex space-x-4">
                <img
                    src={botRed}
                    alt="Logo"
                    className="h-20 w-auto"
                />
                <img
                    src={botPurple}
                    alt="Logo"
                    className="h-20 w-auto"
                />
                <img
                    src={botYellow}
                    alt="Logo"
                    className="h-20 w-auto"
                />
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-white">John Doe</span>
                <button className="bg-blue-500 text-white p-2 rounded">Logout</button>
            </div>
        </div>
    );
}

export default Navbar;