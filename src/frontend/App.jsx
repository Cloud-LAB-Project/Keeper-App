import Navbar from './components/Navbar/Navbar';
import AppInfo from './components/AppInfo/AppInfo';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
//import Post from './components/Post/Post'

const App = () => {
    const [user, setNewUser] = useState(null);
    return (
        <div>
            <BrowserRouter>
                <Navbar user={user} setNewUser={setNewUser} />
                <AppInfo />
            </BrowserRouter>
        </div>
    );
};

export default App;
