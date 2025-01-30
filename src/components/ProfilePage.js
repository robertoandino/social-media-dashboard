import React from 'react';

function ProfilePage({ user }) {
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="relative bg-gray-700 text-white p-6 rounded-lg shadow-lg 
                            w-full md:w-96 lg:w-120" 
            >
                {/**Profile*/}
                <div className="flex items-center space-x-4">
                    <div className={`p-0.5 rounded-full bg-gradient-to-r
                                    ${user.color === "red" ? "from-yellow-500 via-orange-500 to-red-500" :
                                    user.color === "purple" ? "from-purple-500 via-indigo-400 to-indigo-400" :
                                    "from-yellow-500 via-yellow-400 to-green-300" }`
                                    }
                    >
                        <div className="border-2 border-gray-700 rounded-full p-3 bg-gray-700">
                            <img
                                src={user.avatar}
                                alt="Profile pic"
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{user.user}</h2>
                        <p className="text-gray-400">{user.job}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;