import React from 'react';
import axios from 'axios';
import '../css/Home.css';

function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome to the assignment review app</h1>
            <div className="home-feautured">
            <div>
                <h3>Add assignment</h3>
            </div>
            <div>
                <h3>See all assignments</h3>
                </div>
            <div>
                <h3>Edit profile information</h3>
            </div>
            </div>
            <div className="dashboard-btn">
                Go to dashboard
            </div>
        </div>
    );
}
export default HomePage;