import React from 'react';
import Avatar1 from '../pics/adventurer-1731961900547.svg';
import Avatar2 from '../pics/adventurer-1731961906649.svg';


function Feed() {
    const posts = [
        { 
            id: 1,
            user: "Alice",
            avatar: Avatar1,    
            content: "Just posted a new blog!",
            timestamp: "2 hours ago",
            likes: 10,
            comments: 2,
        },
        { 
            id: 2,
            user: "Bob",
            avatar: Avatar2, 
            content: "Check out my latest travel photos.",
            timestamp: "5 hours ago",
            likes: 25,
            comments: 4,
        },
    ];

    return (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Feed</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="p-4 bg-gray-800 rounded-lg shadow-mg flex items-start space-x-4"
                    >
                        <div className="p-0.5 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                            <div className="border border-gray-700 rounded-full p-3 bg-gray-800">
                                <img
                                    src={post.avatar}
                                    alt={`${post.user}'s avatar`}
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                        </div>

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