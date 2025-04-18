import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <header className="header">
            <div className="header-content">
                <a href='/'><img 
                    src="poornima_logo.png" 
                    alt="Campus Companion Logo" 
                    className="header-logo" 
                /></a>
                <div className="header-text">
                    <h1 className="header-title">Campus Companion</h1>
                    <p className="header-subtitle">Your campus info at a glance</p>
                </div>
                <div className="header-buttons" style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
                    <button className="login-button" onClick={handleLoginClick}>Login</button>
                    <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
