import Navbar from './components/Navbar/Navbar';
import AppInfo from './components/AppInfo/AppInfo';
import SignUp from './components/SignUp/SignUp';
import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <AppInfo />
            <SignUp />
        </div>
    );
};

export default App;
