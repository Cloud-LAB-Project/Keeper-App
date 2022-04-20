import Navbar from './components/Navbar/Navbar';
import Note from './components/Note/Note'
import AppInfo from './components/AppInfo/AppInfo';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Post from './components/Post/Post';

const App = () => {
    const [user, setNewUser] = useState(true);
    return (
        <div>
            <BrowserRouter>
                <Navbar user={user} setNewUser={setNewUser} />
<<<<<<< HEAD
                {!user ? <AppInfo /> : <Post />}
=======
                <Note />
>>>>>>> refs/remotes/origin/master
            </BrowserRouter>
        </div>
    );
};

export default App;
