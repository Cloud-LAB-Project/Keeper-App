import React from 'react';
import './AppInfo.css';

const AppInfo = () => {
    return (
        <div className="app-info">
            <ul className="list">
                <li>Keeper is a Note Taking Application.</li>
                <li>
                    Application offers a variety of tools for taking notes
                    including texts, lists.
                </li>
                <li>
                    We have added a Login Functionality for security purposes.
                </li>
                <li>A user cannot access the application without Login.</li>
                <li>A user can create his own posts, edit and delete them.</li>
                <li>A user will be able to access his/her own posts only.</li>
                <li>
                    In the upcoming updates we are planning to add more
                    functionalities.
                </li>
                <li>
                    We will implement pin posts, reminder updates, dark mode in
                    future.
                </li>
            </ul>
        </div>
    );
};

export default AppInfo;
