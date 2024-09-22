import React from 'react';
import axios from 'axios';
import '../css/Home.css';
import Footer from './Footer';

function HomePage() {
    return (
        <div>

        <div className="head-welcome">
        <h1>Welcome to the Assignment Review App</h1>
        </div>

        <div className="home-container">

            <div className='featured-container'>
            <div className="home-featured">
                <h3>Add an assignment</h3>
            </div>
            <div className="home-featured">
                <h3>See all assignments</h3>
                </div>
            <div className="home-featured">
                <h3>Edit profile information</h3>
            </div>
            </div>

            <div className="dashboard-btn">
                Go to dashboard
            </div>
        </div>
<Footer></Footer>
        </div>
    );
}
export default HomePage;