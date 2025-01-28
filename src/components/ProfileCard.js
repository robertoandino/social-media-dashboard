import React, { useState, memo } from 'react';
import bird from '../profilePics/bird.jpg'
import goat from '../profilePics/goat.jpg'
import horse from '../profilePics/horse.jpg'
import dog from '../profilePics/frenchDog.jpg'

function ProfileCard({ user }) {

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    //const [isAnimating, setIsAnimating] = useState(false);
    const [loadingImages, setLoadingImages] = useState(true);
    const [failedImages, setFailedImages] = useState(new Set());
    const images = [bird, goat, horse, dog];

    const handleImageClick = (index) => {
        setSelectedImageIndex(index)
        //setIsAnimating(true);
    };

    const closeModal = () => {
        //setIsAnimating(false);
        //setTimeout(() => setSelectedImage(null), 300);
        setSelectedImageIndex(null);
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    //Image Grid Component
    const ImageGrid = ({ images, startIndex, handleImageClick }) => {
        return images.map((img, index) => (
            <div key={index} className="relative">
                {/** Loading Skeleton */}
                {loadingImages && (
                    <div className="absolute inset-0 w-24 h-24 rounded-lg bg-gray-600 animate-pulse" />
                )}

                {/**Image*/}
                <img
                    src={img}
                    alt={`pic-${startIndex + index + 1}`}
                    onClick={() => handleImageClick(startIndex + index)}
                    onLoad={() => setLoadingImages(false)}
                    onError={() => {
                        setFailedImages(prev => new Set([...prev, img]));
                        setLoadingImages(false);
                    }}
                    className={`w-24 h-24 rounded-lg cursor-pointer transform transition-transform
                        duration-300 hover:scale-110 ${loadingImages ? 'opacity-0' : 'opacity-100'}`}
                    loading='lazy'
                />

                {/**Error state*/}
                {failedImages.has(img) && (
                    <div className="absolute inset-0 w-24 h-24 rounded-lg bg-red-500/20
                        flex items-center justify-center">
                        ❌
                    </div>
                )}
            </div>
        ));
    }

    return (
        <div 
            className="relative bg-gray-700 text-white p-6 rounded-lg shadow-lg max-w-sm"
            style={{ height: "550px" }} //Setting fixed height for profile card.    
        >
            {/* Profile */}
            <div className="flex items-center space-x-4">
                <div className={`p-0.5 rounded-full bg-gradient-to-r 
                                ${user.color === "red" ? "from-yellow-500 via-orange-500 to-red-500" : 
                                user.color === "purple" ?  "from-purple-500 via-indigo-400 to-indigo-400" :
                                "from-yellow-500 via-yellow-400 to-green-300"}`
                                }
                >
                    <div className="border-2 border-gray-700 rounded-full p-3 bg-gray-700">
                        <img
                            src={user.avatar}
                            alt="Profile"
                            className="w-20 h-20 rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">{user.user}</h2>
                    <p className="text-gray-400">{user.job}</p>
                </div>
            </div>

            {/*info*/}
            <div className="mt-4">
                <p className="text-gray-300">
                    "Striving for greatness one line of code at a time."
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

            {/*Images*/}
            <div className="mt-6 flex justify-center space-x-6">
                <ImageGrid
                    images={images.slice(0,3)}
                    startIndex={0}
                    handleImageClick={handleImageClick}
                />
            </div>
            <div className="mt-6 flex justify-center space-x-6">
                <ImageGrid
                    images={images.slice(3)}
                    startIndex={3}
                    handleImageClick={handleImageClick}
                />
            </div>

            {/*Modal*/}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black
                                bg-opacity-70 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div className="relative rounded-lg p-4 max-w-[50vw] max-h-[90vh] overflow-auto">
                        {/**Previous Button*/}
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30
                                        text-white p-2 rounded-full hover:bg-white/50 transition-colors"
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

                        {/**Next Button*/}
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30
                                        text-white p-2 rounded-full hover:bg-white/50 transition-colors"
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
    );
}

export default memo(ProfileCard);