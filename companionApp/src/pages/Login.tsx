import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="auth-page">
            <div className="animated-container">
                <h2 className="animated-title">Welcome Back</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="login-input"
                        />
                    <button type="submit" className="animated-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
