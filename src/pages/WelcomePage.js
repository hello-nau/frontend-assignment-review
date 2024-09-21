import React from "react";
import { Link } from "react-router-dom";
import '../css/Welcome.css';
import Footer from './Footer';

function WelcomePage() {
    return (
        <div className="welcome-container">

            <div className="head-welcome">
                 <h1>Welcome to the Assignment Review App</h1>
            </div>
        <div className="container">
            <div className="box-container">
                <p className="container-text">If you already have an account, please log in to access your assignments. 
                    This applies to students, reviewers, and admins.</p>
                <div className="link-container">
                    <Link to="/login">Login</Link>
                </div>
               
            </div>

          <div className="box-container">
            <p  className="container-text">New here? 
                Register your account to start submitting assignments and managing your tasks.</p>
            <div className="link-container">
                <Link to="/register">Register</Link>
            </div> 
          </div>

        </div>    

        <div className="about-container">
            <p>Welcome to the Assignment App, your ultimate platform for seamless assignment management.<br></br> 
                Designed with both learners and reviewers in mind, this application streamlines the submission, editing, and review process.
                 Learners can easily create assignments, resubmit unfinished work, and access review videos—all from their personalized dashboard.
                  Reviewers can effortlessly claim assignments, provide feedback, and track submissions, ensuring a collaborative and efficient review process for everyone involved.</p>
        </div>
            <Footer></Footer>
        </div>
    );
}
export default WelcomePage;