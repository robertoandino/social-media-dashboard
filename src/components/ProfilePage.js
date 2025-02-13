import React, { useState } from 'react';
import bird from '../profilePics/bird.jpg';
import goat from '../profilePics/goat.jpg';
import horse from '../profilePics/horse.jpg';
import dog from '../profilePics/frenchDog.jpg';

function ProfilePage({ user }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [loadingImages, setLoadingImages] = useState(true);
    const [failedImages, setFailedImages] = useState(new Set());
    const images = [bird, goat, horse, dog];

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    }

    const closeModal = () => {
        setSelectedImageIndex(null);
    }

    const goToNextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
    }

    const goToPreviousImage = () => {
        setSelectedImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    }

    //Image Grid Component
    const ImageGrid = ({ images, startIndex, handleImageClick }) => {
        return images.map((img, index) => (
            <div key={index} className="relative">
                {/**Loading Skeleton*/}
                {loadingImages && (
                    <div className="absolute inset-0 w-48 h-48 rounded-lg bg-gray-800 animate-pulse" />
                )}

                {/**Image*/}
                <img
                    src={img}
                    alt={`pic-${startIndex + index + 1}`}
                    onClick={() => handleImageClick(startIndex + index)}
                    onLoad={() => setLoadingImages(false)}
                    onError={() => {
                        setLoadingImages((prev) => new Set([...prev, img]));
                        setLoadingImages(false);
                    }}
                    className={`w-48 h-48 rounded-lg cursor-pointer transform transtion-transform duration-300
                        hover:scale-110 ${loadingImages ? 'opacity-0' : 'opacity-100'}`}
                    loading="lazy"
                />

                {/**Error state*/}
                {failedImages.has(img) && (
                    <div className="absolute inset-0 flex w-48 h-48 rounded-lg bg-red-500/20 flex items-cente justify-center">
                        ❌
                    </div>
                )}
            </div>
        ))
    }

    return (
        <div className="flex justify-center items-start pt-14 h-screen">
            {/**Main Content Container*/}
            <div className="flex flex-col space-y-6 w-full max-w-6xl px-4">
                {/**Profile Card*/}
                <div className="relative bg-gray-800/80 text-white p-6 rounded-lg shadow-xl ring-1 ring-gray-600
                             transition-transform duration-300 hover:shadow-2xl 
                            hover:scale-[1.02]"
                >
                    {/**Background*/}
                    <div
                        className={`absolute top-0 left-0 w-full h-32 rounded-t-lg bg-gradient-to-r 
                                ${user.color === "red" ? "from-yellow-500 via-orange-500 to-red-500" :
                                user.color === "purple" ? "from-purple-500 via-indigo-400 to-indigo-400" :
                                    "from-yellow-500 via-yellow-400 to-green-300"}
                                    bg-[length:200%_200%] animate-moving-gradient`}
                    >
                    </div>

                    {/**Profile*/}
                    <div className="flex items-center space-x-4 relative z-10 mt-16">
                        {/**Profile Pic*/}
                        <div className={`p-0.5 rounded-full bg-gradient-to-r
                                    ${user.color === "red" ? "from-yellow-500 via-orange-500 to-red-500" :
                                user.color === "purple" ? "from-purple-500 via-indigo-400 to-indigo-400" :
                                    "from-yellow-500 via-yellow-400 to-green-300"} transition-transform hover:-translate-y-1`
                        }
                        >
                            <div className="border-2 border-gray-800 rounded-full p-3 bg-gray-800">
                                <img
                                    src={user.avatar}
                                    alt="Profile pic"
                                    className="w-20 h-20 rounded-full"
                                />
                            </div>
                        </div>
                        {/**User Info*/}
                        <div>
                            <h2 className="text-2xl font-bold tracking-wide text-gray-200 mt-6">{user.user}</h2>
                            <p className="text-sm text-gray-400">{user.job}</p>
                        </div>
                    </div>

                    {/**User Stats*/}
                    <div className="mt-6">
                        <p className="text-gray-300">
                            {user.bio}
                        </p>
                    </div>
                    <div className="mt-6 flex justify-between text-center space-x-4">
                        {[
                            { label: 'Followers', value: user.followers },
                            { label: 'Following', value: user.followers },
                            { label: 'Likes', value: user.likes },
                        ].map((stat, index) => (
                            <div key={index} className="group transition-transform hover:scale-110">
                                <p className="text-lg font-semibold text-white group-hover:text-primary">{stat.value}</p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/** Images */}
                <div className="relative bg-gray-800/80 p-6 rounded-lg shadow-xl ring-1 ring-gray-600 w-full
                            transfor transition-all duration-300 hover:shadow-2xl 
                            hover:scale-[1.02]"
                >
                    <h2 className="text-xl font-bold mb-4 text-white">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                        <div className="mt-6 flex justify-center space-x-8">
                            <ImageGrid
                                images={images.slice(0, 4)}
                                startIndex={0}
                                handleImageClick={handleImageClick}
                            />
                        </div>
                    </div>
                </div>

                {/**Posts*/}
                <div className="relative bg-gray-800/80 p-6 rounded-lg shadow-xl ring-1 ring-gray-600 w-full
                            transfor transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                    <h2 className="text-xl font-bold mb-4 text-white">Posts</h2>
                    {[
                        { label: 'Building first React App! ', date: '2 hours ago', likes: 32 },
                        { label: 'Just finished a full-stacj project! ', date: 'Yesterday', likes: 56 },
                        { label: 'Learning Tailwind CSS is fun! ', date: '2 days ago', likes: 21 },
                    ].map((post, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] 
                                        transition-transform flex items-start space-x-4 mt-5"
                            
                            >
                                {/**Profile Icon*/}
                                <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                                    {user.user[0]}
                                </div>

                                {/**Post Content*/}
                                
                            </div>
                        ))}
                </div>

            </div>

            {/**Modal*/}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div className="relative rounded-lg p-4 max-w-[50vw] max-h-[100vh] overflow-auto">
                        {/**Previous button*/}
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 text-white
                                    p-2 rounded-full hover:bg-white/50 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPreviousImage();
                            }}
                        >
                            &lt;
                        </button>

                        {/**Image*/}
                        <img
                            src={images[selectedImageIndex]}
                            alt="Expanded"
                            className="max-w-full max-h-full p-4"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/**Next button*/}
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 text-white
                                    p-2 rounded-full hover:bg-white/50 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNextImage();
                            }}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfilePage;