import Navbar from './components/Navbar/Navbar';
import AppInfo from './components/AppInfo/AppInfo';
import React, { useState } from 'react';
import './App.css';
import Post from './components/Post/Post';

const App = () => {
    const [user, setNewUser] = useState(null);
    return (
        <div>
            <Navbar user={user} setNewUser={setNewUser} />
            {!user ? <AppInfo /> : <Post />}
        </div>
    );
};

export default App;
