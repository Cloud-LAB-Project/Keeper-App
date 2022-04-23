import Navbar from './components/Navbar/Navbar';
import AppInfo from './components/AppInfo/AppInfo';
import React, { useState } from 'react';
import './App.css';
import Post from './components/Post/Post';

const App = () => {
    const [user, setNewUser] = useState(null);
    const [posts, setPosts] = useState([]);

    return (
        <div>
            <Navbar 
                user={user} 
                posts={posts} 
                setPosts={setPosts} 
                setNewUser={setNewUser} 
            />
            {!user ? <AppInfo /> : <Post posts={posts}/>}
        </div>
    );
};

export default App;
