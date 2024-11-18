import React from 'react';
import Avatar3 from '../pics/adventurer-1731961910274.svg';

function ProfileCard(){
    return(
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center space-x-4">
                <img
                    src={Avatar3}
                    alt="Profile"
                    className="w-20 h-20 rounded-full"
                />
                <div>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-400">Software Developer</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-300">"Striving for greatness one line of code at a time."</p>
            </div>
            <div className="mt-6 flex justify-between text-center">
                <div>
                    <p className="text-lg font-semibold">1.2k</p>
                    <p className="text-gray-400">Followers</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">87</p>
                    <p className="text-gray-400">Posts</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">523</p>
                    <p className="text-gray-400">Likes</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;