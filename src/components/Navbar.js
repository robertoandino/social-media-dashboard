import React from 'react';

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded border bg-blue-400 text-white placeholder-white border-gray-300 focus:outline-none"
            />
            <div className="flex items-center space-x-4">
                <span className="text-white">John Doe</span>
                <button className="bg-blue-500 text-white p-2 rounded">Logout</button>
            </div>
        </div>
    );
}

export default Navbar;