import React from 'react';

function Feed({ posts, onUserClick }) {
    return (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Net</h2>
            <div className="space-y-8 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600
                        scrollbar-track-gray-700">
                {posts.map(post => (
                    /*User's Icon*/
                    <div
                        key={post.id}
                        className="p-4 bg-gray-800 rounded-lg shadow-mg flex items-start space-x-4 cursor-pointer"
                        onClick={() => onUserClick(post)}
                    >
                        <div className={`p-0.5 rounded-full bg-gradient-to-r 
                                ${post.color === "red" ? "from-yellow-500 via-orange-500 to-red-500" : 
                                post.color === "purple" ?  "from-purple-500 via-indigo-500" :
                                "from-yellow-500 via-black-500"}`}>
                            <div className="border border-gray-700 rounded-full p-3 bg-gray-800">
                                <img
                                    src={post.avatar}
                                    alt={`${post.user}'s avatar`}
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                        </div>
                        {/*User's Post*/}
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white">{post.user}</h3>
                                <span className="text-xs text-gray-400">{post.timestamp}</span>
                            </div>
                            <p className="text-gray-4300 mt-2">{post.content}</p>

                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="text-sm text-blue-400 hover:underline flex items-center space-x-1"
                                >
                                    <span>👍</span>
                                    <span>{post.likes} Likes</span>
                                </button>
                                <button
                                    className="text-sm text-blue-400 hover:underline flex items-center space-x-1"
                                >
                                    <span>💬</span>
                                    <span>{post.comments} Comments</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feed;