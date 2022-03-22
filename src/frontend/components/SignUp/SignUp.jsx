import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './SignUp.css';

const SignUp = () => {
    const [uname, setUname] = useState('');

    const fromObj = {
        uname: '',
        password: '',
        email: '',
    };

    const handleSumit = (e) => {
        e.preventDefault();
        // const { uname, email, pwd, cpwd } = req.body
        console.log(uname);
        fromObj.uname = uname;
        // fromObj.password=password
        // fromObj.email=email
    };

    return (
        <div className="SignUp-container">
            <form className="SignUp-form">
                <Input
                    className="SignUp-text"
                    name="uname"
                    onChange={(e) => setUname(e.target.value)}
                    placeholder="User name"
                />
                <Input
                    className="SignUp-text"
                    name="email"
                    placeholder="E-mail"
                />
                <Input
                    className="SignUp-text"
                    name="pwd"
                    type="password"
                    placeholder="Password"
                />
                <Input
                    className="SignUp-text"
                    name="cpwd"
                    type="password"
                    placeholder="Confirm-Password"
                />
                <Button
                    onClick={(e) => handleSumit(e)}
                    className="SignUp-btn"
                    variant="contained"
                    color="success"
                >
                    Submit
                </Button>
                <br></br>
                <br></br>
                <Button className="SignUp-btn" variant="contained">
                    SignUp with google
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
