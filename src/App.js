import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import ProfileCard from './components/ProfileCard';
import Avatar1 from './pics/adventurer-1731961900547.svg';
import Avatar2 from './pics/adventurer-1731961906649.svg';
import Avatar3 from './pics/adventurer-1731961910274.svg';

const users = [
  {
    id: 1,
    user: "Alice",
    job: "Software Engineer",
    avatar: Avatar1,
    bio: "Just another developer on the grind",
    followers: "320k",
    posts: 20,
    likes: "152k",
    content: "Just posted a new blog!",
    timestamp: "2 hours ago",
    comments: 2,
    color: "yellow",
    images: []
  },
  {
    id: 2,
    user: "Bob",
    job: "Photographer",
    avatar: Avatar2,
    bio: "Travel enthusiast sharing moments.",
    followers: "1000",
    posts: 45,
    likes: "50k",
    images: [],
    content: "Check out my latest travel photos.",
    timestamp: "5 hours ago",
    comments: 4,
    color: "purple"
  },
  {
    id: 3,
    user: "John",
    job: "Unemployed",
    avatar: Avatar3,
    bio: "Hhahahahahasaa.",
    followers: 10210,
    posts: 323,
    likes: "230k",
    images: [],
    content: "HahahhhsHSAS.",
    timestamp: "7 hours ago",
    comments: 323,
    color: "red"
  }
];

function App() {

  const [posts, setPosts] = useState(users);
  const [selectedUser, setSelectedUser] = useState(users[2]);

  return (
    <DashboardLayout>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <ProfileCard user={selectedUser}/>
        <div className="lg:col-span-2 space-y-6">
          <CreatePost user={selectedUser} setPosts={setPosts}/>
          <Feed posts={posts} onUserClick={setSelectedUser}/>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
