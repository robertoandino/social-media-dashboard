import React from 'react';

function Feed() {
    const posts = [
        { id: 1, content: "Just posted a new blog!"},
        { id: 2, content: "Check out my latest travel photos."},
    ];

    return (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Feed</h2>
            {posts.map(post => (
                <div key={post.id} className="p-4 border-b last:border-none">
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Feed;