import React from 'react';

function ProfilePage({ user }) {
    return(
        <div className="flex justify-center items-start pt-14 h-screen">
            {/**Main Content Container*/}
            <div className="flex flex-col space-y-6 w-full max-w-6xl px-4">
                {/**Profile Card*/}
                <div className="relative bg-gray-700 text-white p-6 rounded-lg shadow-lg 
                            w-full" 
            >
                {/**Background*/}
                <div
                    className={`absolute top-0 left-0 w-full h-32 rounded-t-lg bg-gradient-to-r 
                                ${user.color === "red" ? "from-yellow-500 via-orange-500 to-red-500" :
                                user.color === "purple" ? "from-purple-500 via-indigo-400 to-indigo-400" :
                                "from-yellow-500 via-yellow-400 to-green-300" }`
                                }
                >
                </div>

                {/**Profile*/}
                <div className="flex items-center space-x-4 relative z-10 mt-16">
                    {/**Profile Pic*/}
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
                    {/**User Info*/}
                    <div>
                        <h2 className="text-xl font-bold mt-6">{user.user}</h2>
                        <p className="text-gray-400">{user.job}</p>
                    </div>
                </div>

                {/**User Info*/}
                <div className="mt-6">
                    <p className="text-gray-300">
                        {user.bio}
                    </p>
                </div>
                <div className="mt-6 flex justify-between text-center">
                    <div>
                        <p className="text-lg font-semibold">{user.followers}</p>
                        <p className="text-gray-400">Followers</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{user.posts}</p>
                        <p className="text-gray-400">Posts</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{user.likes}</p>
                        <p className="text-gray-400">Likes</p>
                    </div>
                </div>
                </div>
                {/**New Section*/}
                <div className="relative bg-gray-700 text-white p-6 rounded-lg shadow-lg 
                                w-full" 
                ></div>
            </div>
        </div>
    )
}

export default ProfilePage;