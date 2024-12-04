import React, { useState } from 'react';

function CreatePost({ user, setPosts }){

    const [postContent, setPostContent] = useState("");

    const handlePostSubmit = () => {

        if(!user) {
            alert("User is not defined!");
            return;
        }

        if (postContent.trim() !== "") {

            const newPost = {
                id: Date.now(), //Creates unique ID
                user: user.user,
                avatar: user.avatar,
                color: user.color,
                content: postContent,
                timestamp: new Date().toLocaleTimeString(),
                likes: 0,
                comments: 0,
            };
            setPosts((prevPosts) => [newPost, ...prevPosts]);
            setPostContent("");
        } else {
            alert("Post cannot be empty!")
        }

    }

    return(
        <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Thoughts</h2>
            <div className="space-x-4">
                {/*Input*/}
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg
                            outline-none focus:ring-2 focus:rind-blue-500"
                />
            </div>

            {/**Post Button*/}
            <div className="flex justify-end mt-4">
                <button
                    onClick={handlePostSubmit}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg
                            hover:bg-blue-500 transition"
                >
                    Post
                </button>
            </div>

            {/*Emojis*/}
            <div className="flex space-x-4 justify-center">
                <button
                    className="flex flex-col items-center p-4 rounded-lg
                            hover:bg-gray-500 transition"
                    onClick={() => alert("Picture option clicked!")}
                >
                    <span className="text-3xl">🖼️</span>
                </button>
                <button
                    className="flex flex-col items-center p-4 rounded-lg
                    hover:bg-gray-500 transition"
                    onClick={() => alert("Music option clicked!")}
                >
                    <span className="text-3xl">🎵</span>
                </button>
                <button
                    className="flex flex-col items-center p-4 rounded-lg
                    hover:bg-gray-500 transition"
                    onClick={() => alert("Blog option clicked!")}
                >
                    <span className="text-3xl">✍️</span>
                </button>
                <button
                     className="flex flex-col items-center p-4 rounded-lg
                     hover:bg-gray-500 transition"
                     onClick={() => alert("Video option clicked!")}
                >
                    <span className="text-3xl">🎥</span>
                </button>
            </div>
        </div>
    );
}

export default CreatePost;