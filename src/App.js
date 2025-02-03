import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import ProfileCard from './components/ProfileCard';
import ProfilePage from './components/ProfilePage';
import AIPanel from './components/AIPanel';
import Avatar1 from './pics/adventurer-1731961900547.svg';
import Avatar2 from './pics/adventurer-1731961906649.svg';
import Avatar3 from './pics/adventurer-1731961910274.svg';
import bird from './profilePics/bird.jpg'
import goat from './profilePics/goat.jpg'
import horse from './profilePics/horse.jpg'
import dog from './profilePics/frenchDog.jpg'

const users = [
  {
    id: 1,
    user: "Alice",
    job: "Software Engineer",
    avatar: Avatar1,
    bio: "Just another developer on the grind",
    followers: "320k",
    posts: 20,
    likes: 50,
    content: "Just posted a new blog!",
    timestamp: "2 hours ago",
    color: "yellow",
    images: [bird, goat, horse, dog],
    commentsList: [
      { user: "John", avatar: Avatar3, text: "Nice post!", color: "red"},
      { user: "Bob", avatar: Avatar2, text: "Totally agree!", color: "purple"},
    ],
  },
  {
    id: 2,
    user: "Bob",
    job: "Photographer",
    avatar: Avatar2,
    bio: "Travel enthusiast sharing moments.",
    followers: "1000",
    posts: 45,
    likes: 1,
    images: [bird, goat, horse, dog],
    content: "Check out my latest travel photos.",
    timestamp: "5 hours ago",
    color: "purple",
    commentsList: [
      { user: "John", avatar: Avatar3, text: "Nice post!", color: "red"},
      { user: "Bob", avatar: Avatar2, text: "Totally agree!", color: "purple"},
    ],
  },
  {
    id: 3,
    user: "John",
    job: "Unemployed",
    avatar: Avatar3,
    bio: "Striving for greatness one line of code at a time.",
    followers: 10210,
    posts: 323,
    likes: 2,
    images: [bird, goat, horse, dog],
    content: "HahahhhsHSAS.",
    timestamp: "7 hours ago",
    color: "red",
    commentsList: [
      { user: "John", avatar: Avatar3, text: "Nice post!", color: "red"},
      { user: "Bob", avatar: Avatar2, text: "Totally agree!", color: "purple"},
    ],
  }
];

function App() {

  const [posts, setPosts] = useState(users);
  const [selectedUser, setSelectedUser] = useState(users[2]);
  const [animatedPost, setAnimatedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  const handlePostAnimation = (newPost) => {
    setAnimatedPost({
      ...newPost,
      commentsList: newPost.commentsList || [], //Making sure commentsList is always initialized. 
    });
    setTimeout(() => {
      setPosts((prevPosts) => [
        { ...newPost, commentsList: newPost.commentsList || [] },
        ...prevPosts,
      ]);
      setAnimatedPost(null);
      window.scrollTo({ top: 0, behavior: 'smooth' }); //Smooth scroll to top
    }, 1000);
  };

  const handleUpdatedPosts = (updatedPosts) => {
    setPosts(updatedPosts);
  };

  const likesCounter = (postId) => {   
    setPosts((prevPosts) => 
      prevPosts.map((post) => {
        if(post.id === postId) {
          const isLiked = likedPosts.includes(postId);
          return {
            ...post,
            likes: (post.likes || 0 ) + (isLiked ? -1 : 1),
          }
        }    
        return post;
      })
    )

    setLikedPosts((prevLikedPosts) => 
      prevLikedPosts.includes(postId)
        ? prevLikedPosts.filter((id) => id !== postId) //removes from liked posts
        : [...prevLikedPosts, postId] //Add to liked posts
    );
};

  return (
    <Router>
      <DashboardLayout>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/**Left Column*/}
                <div className="space-y-6">
                  <ProfileCard user={selectedUser}/>
                  <AIPanel/>
                </div>

                {/**Right Column*/}
                <div className="lg:col-span-2 space-y-6">
                  <CreatePost user={selectedUser} onAnimatePost={handlePostAnimation} />
                  <Feed 
                    posts={posts} 
                    selectedUser={selectedUser} 
                    onUserClick={setSelectedUser} 
                    animatedPost={animatedPost} 
                    onUpdatedPosts={handleUpdatedPosts} 
                    likesCounter={likesCounter}
                  />
                </div>
              </div>
            }
          />
          <Route path="/profile" element={<ProfilePage user={selectedUser}/>} />
          <Route path="/ai" element={<div>AI Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
