import React from 'react';

function CreatePost(){
    return(
        <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Thoughts</h2>
            <div className="space-x-4">
                {/*Input*/}
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg
                            outline-none focus:ring-2 focus:rind-blue-500"
                />
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