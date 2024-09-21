import React from "react";
import { Link } from "react-router-dom";
import '../css/Welcome.css';

function WelcomePage() {
    return (
        <div className="welcome-container">
            <h1>Welcome to Assignment Review App</h1>
            <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </div>
        </div>
    );
}
export default WelcomePage;