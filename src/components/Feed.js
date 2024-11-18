import React from 'react';

function Feed() {
    const posts = [
        { 
            id: 1,
            user: "Alice",
            avatar: "https://via.placeholder.com/40",    
            content: "Just posted a new blog!",
            timestamp: "2 hours ago",
            likes: 10,
            comments: 2,
        },
        { 
            id: 2,
            user: "Bob",
            avatar: "https://via.placeholder.com/40", 
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
                    <div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feed;