import React from 'react';

function Sidebar() {
    return (
        <div className="bg-gray-900 text-white w-64 h-screen p-5">
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
            <nav>
                <ul>
                    <li className="mb-4"><a href="#" className="hover:text-blue-500">Home</a></li>
                    <li className="mb-4"><a href="#" className="hover:text-blue-500">Analytics</a></li>
                    <li><a href="#" className="hover:text-blue-500">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;