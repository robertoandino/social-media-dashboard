import React from 'react';

function ProfileCard(){
    return(
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="w-20 h-20 rounded-full"
                />
                <div>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-400">Software Developer</p>
                </div>
            </div>
        </div>
    )
}