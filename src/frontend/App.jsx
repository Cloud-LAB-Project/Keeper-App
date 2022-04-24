import AppInfo from './components/AppInfo/AppInfo';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';
import qs from 'qs';
import './App.css';
import Home from './components/HomePage/Home';

async function checkValidity(setNewUser, setPosts) {
    const cookieObj = new URLSearchParams(
        document.cookie.replaceAll('; ', '&')
    );
    const uid = cookieObj.get('uid').slice(2).replaceAll('"', '');

    if (uid && uid !== '') {
        const userData = await fetch('http://localhost:3001/user/letin', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({ id: uid }),
        });

        const user = await userData.json();
        const posts = await fetch(
            'http://localhost:3001/user/post?user=' + user._id,
            {
                method: 'GET',
                mode: 'cors',
            }
        );

        let postsJson = await posts.json();
        postsJson = postsJson.map((post) => {
            post['id'] = post['_id'];
            delete post['_id'];
            return post;
        });

        if (user) {
            setNewUser(user);
            setPosts(postsJson);
        }
    }
}

const App = () => {
    const [user, setNewUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => checkValidity(setNewUser, setPosts), []);

    return (
        <div>
            <Navbar
                user={user}
                posts={posts}
                setPosts={setPosts}
                setNewUser={setNewUser}
            />
            {!user ? (
                <Home/>
            ) : (
                <Post posts={posts} setPosts={setPosts} user={user} />
            )}
        </div>
    );
};

export default App;
