import Navbar from './components/Navbar/Navbar';
import AppInfo from './components/AppInfo/AppInfo';
import React, { useState } from 'react';
import './App.css';
import Post from './components/Post/Post';
import qs from 'qs';

// async function checkValidity(setNewUser, setPosts) {
//     const cookieObj = new URLSearchParams(document.cookie.replaceAll("; ", "&"));
//     const uid = cookieObj.get("uid").slice(2);

//     if (uid && uid !== '') {
//         console.log(uid);
//         console.log("user")
//         const userData = await fetch('http://localhost:3001/user/letin', {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: qs.stringify({ id: uid })
//         });

//         const user = await userData.json();
//         const posts = await fetch('http://localhost:3001/user/post?user=' + user._id, {
//             method: 'GET',
//             mode: 'cors'
//         });

//         let postsJson = await posts.json();
//         postsJson = postsJson.map(post => {
//             post['id'] = post['_id'];
//             delete post['_id'];
//             return post;
//         });

//         if (user) {
//             setNewUser(user);
//             setPosts(postsJson);
//         }
//     }
// }

const App = () => {
    const [user, setNewUser] = useState(null);
<<<<<<< HEAD
=======
    const [posts, setPosts] = useState([]);

    // checkValidity(setNewUser, setPosts);

>>>>>>> refs/remotes/origin/master
    return (
        <div>
            { }
            <Navbar
                user={user}
                posts={posts}
                setPosts={setPosts}
                setNewUser={setNewUser}
            />
            {!user ? <AppInfo /> : <Post posts={posts} setPosts={setPosts} user={user} />}
        </div>
    );
};

export default App;
