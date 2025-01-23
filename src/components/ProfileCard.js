import React, { useState, memo, useEffect } from 'react';
import bird from '../profilePics/bird.jpg'
import goat from '../profilePics/goat.jpg'
import horse from '../profilePics/horse.jpg'
import dog from '../profilePics/frenchDog.jpg'

function ProfileCard({ user }) {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [imageErrors, setImageErrors] = useState(new Set());
    const images = [bird, goat, horse, dog];

    const handleImageClick = (image) => {
        setSelectedImage(image)
        setIsAnimating(true);
    }

    const closeModal = () => {
        setIsAnimating(false);
        setTimeout(() => setSelectedImage(null), 300);
    }

    //Loading state for images
    const ImageSkeleton = () => {
        <div className="w-24 h-24 rounded-lg bg-gray-600 animate-pulse"/>
    }

    //Image component with loading state
    const LoadingImage = ({ src, index, onClick }) => {
        const isLoaded = loadedImages.has(src);
        const hasError = imageErrors.has(src);

        const handleLoad = () => {
            setLoadedImages(prev => new Set([...prev, src]));
        };

        const handleError = () => {
            setImageErrors(prev => new Set([...prev, src]));
        };

        if (hasError) {
            return <div className="w-24 h-24 rounded-lg bg-red-500/20 flex items-center justify-center">❌</div>
        }

        return (
            <>
                {!isLoaded && <ImageSkeleton />}
                <img
                    src={src}
                    alt={`pic-${index + 1}`}
                    onClick={onClick}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`w-24 h-24 rounded-lg cursor-pointer transform transition-transform
                        duration-300 hover:scale-110 ${isLoaded ? 'block' : 'hidden'}`}
                />
            </>
        )
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
                {images.slice(0, 3).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`pic-${index + 3}`}
                        onClick={() => handleImageClick(img)}
                        className="w-24 h-24 rounded-lg cursor-pointer transform transition-transform
                                duration-300 hover:scale-110"
                    />
                ))}
            </div>
            <div className="mt-6 flex justify-center space-x-6">
                {images.slice(3).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`pic-${index + 3}`}
                        onClick={() => handleImageClick(img)}
                        className="w-24 h-24 rounded-lg cursor-pointer transform transition-transform
                                    duration-300 hover:scale-110"
                    />
                ))}
            </div>

            {/*Modal*/}
            {selectedImage && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black
                                bg-opacity-70 backdrop-blur-sm transition-opacity
                                duration-300
                                ${isAnimating ? "opacity-100" : "opacity-0"}`}
                    onClick={closeModal}
                >
                    <img
                        src={selectedImage}
                        alt="Expanded"
                        className={`max-w-full max-h-full p-4 transform transition-transform
                                    duration-500 
                                    ${isAnimating ? "scale-100" : "scale-50 opacity-0"}`}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

export default ProfileCard;