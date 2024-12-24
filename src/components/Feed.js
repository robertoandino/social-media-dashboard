import React, { useEffect, useState, useRef, memo } from 'react';
import ActionButton from './ActionButton';

function Feed({ posts, onUserClick, animatedPost, onUpdatedPosts, likesCounter }) {

    const thoughtsRef = useRef(null);
    const [thoughtsPosition, setThoughtsPosition] = useState(0);
    const [openComments, setOpenComments] = useState({}); 
    const [commentsInput, setCommentsInput] = useState({});

    //Animated Post
    useEffect(() => {
        if(thoughtsRef.current) {
            const rect = thoughtsRef.current.getBoundingClientRect();
            setThoughtsPosition(rect.bottom);
        }
    }, [animatedPost]);

    //Toggle comments
    const toggleComments = (postId) => {
        setOpenComments((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    //Handles comments updates
    const commentChange = (postId, value) => {
        setCommentsInput((prev) => ({
            ...prev,
            [postId]: value,
        }));
    };

    //Handles adding new comment
    const addComment = (postId) => {
        const newComment = commentsInput[postId];
        if(!newComment) return;

        const updatedPosts = posts.map((post) => 
            post.id === postId
                ? {
                    ...post,
                    commentsList: [
                        ...(post.commentsList || []),
                        { user: "Current User", text: newComment },
                    ],
                    comments: (post.comments || 0) + 1, //Increment comments count
                }
                : post
        );

        //console.log("Updated Posts:", updatedPosts)

        //Update parent state
        if(typeof onUpdatedPosts === "function"){
            console.log("onUpdatedPosts is being called.");
            onUpdatedPosts(updatedPosts);
        }

        //Clear form
        setCommentsInput((prev) => ({
            ...prev,
            [postId]: "",
        }));
    };

    //Using react.memo to prevent unnecessary re-renders for comments
    const CommentList = memo(({ comments }) => (
        <>
            {comments.map((comment, index) => (
                <div key={index} className="text-gray-400 text-sm mb-2">
                    <span className="font-bold">{comment.user}: </span>
                    {comment.text}
                </div>
            ))}
        </>
    ))

    return (
        <div className="relative p-6 bg-gray-700 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
            <h2 className="text-xl font-bold mb-4">Net</h2>

            {/**Animated Post*/}
            {animatedPost && (
                <div
                    className={`absolute left-1/2 transform -translate-x-1/2 bg-gray-800 p-4 rounded-lg
                        shadow-lg animate-jump-to-feed z-10`}
                    style={{
                        top: `${thoughtsPosition + -50}px`, //Vertical position
                        left: "-1%", //shift slightly to the left
                        transform: "translate(45%, 0)", //Adjust translaiton to align.
                        width: "calc(100% - 2rem)",
                    }}
                >
                    <div className="flex items-start space-x-4">
                        {/**Avatar*/}
                        <div className={`p-0.5 rounded-full bg-gradient-to-r
                            ${animatedPost.color === "red"
                                ? "from-yellow-500 via-orange-500 to-red-500"
                                : animatedPost.color === "purple"
                                ? "from-purple-500 via-indigo-500"
                                : "from-yellow-500 via-black-500"}`}
                        >
                            <div className="border border-gray-700 rounded-full p-3 bg-gray-800">
                                <img
                                    src={animatedPost.avatar}
                                    alt={`${animatedPost.user}'s avatar`}
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>    
                        </div>

                        {/**Post Content*/}
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white">{animatedPost.user}</h3>
                                <p className="text-gray-400 mt-2">{animatedPost.content}</p>
                            </div>
                            <p className="text-gray-300 mt-2">{animatedPost.content}</p>
                            <div className="flex space-x-4 mt-4">
                                <button className="text-sm text-blue-400 hover:underline flex
                                                items-center space-x-1"
                                >
                                    <span>👍</span>    
                                    <span>{animatedPost.likes} likes</span>
                                </button>
                                <button className="text-sm text-blue-400 hover:underline flex
                                                items-center space-x-1"
                                >
                                    <span>💬</span>
                                    <span>{animatedPost.comments} Comments</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/**Posts Lists*/}
            <div className="space-y-8">
                {posts.map(post => (
                    /*Avatar*/
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
                        {/*Posts Content*/}
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white">{post.user}</h3>
                                <span className="text-xs text-gray-400">{post.timestamp}</span>
                            </div>
                            <p className="text-gray-4300 mt-2">{post.content}</p>
                            
                            {/**Buttons*/}
                            <div className="flex space-x-4 mt-4">
                                <ActionButton
                                    icon="👍"
                                    text={`${post.likes} Likes`}
                                    onClick={() => {
                                        e.stopPropagation();
                                        likesCounter(post.id);
                                    }}
                                />
                                <ActionButton
                                    icon="💬"
                                    text={`${post.commentsList?.length || 0} Comments`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleComments(post.id);
                                    }}
                                />
                            </div>

                            {/**Comments Section*/}
                            {openComments[post.id] && (
                                <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-inner">
                                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Comments:</h4>
                                    {post.commentsList && post.commentsList.length > 0 ? (
                                        <CommentList comments={post.commentsList} />
                                    ) : (
                                        <p className="text-gray-500 text-sm">No comments yet.</p>
                                    )}

                                    {/**Add new comment form*/}
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border 
                                                    border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
                                            placeholder="Write a comment..."
                                            value={commentsInput[post.id] || ""}
                                            onChange={(e) => 
                                                commentChange(post.id, e.target.value)
                                            }
                                        />
                                        <button
                                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                addComment(post.id);
                                                console.log(post.commentsList)
                                            }}
                                        >
                                            Post Comment
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feed;