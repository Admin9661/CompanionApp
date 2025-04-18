import React from 'react';
import './Signup.css';

const Signup: React.FC = () => {
    return (
        <div className="auth-page">
            <div className="animated-container">
                <h2 className="animated-title">Sign Up</h2>
                <form className="signup-form">
                    <input type="text" placeholder="Username" className="animated-input" />
                    <input type="email" placeholder="Email" className="animated-input" />
                    <input type="password" placeholder="Password" className="animated-input" />
                    <button type="submit" className="animated-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
