import Navbar from './components/Navbar/Navbar';
import AppInfo from './components/AppInfo/AppInfo';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
//import Post from './components/Post/Post'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<AppInfo />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
