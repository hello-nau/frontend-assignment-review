import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './css/Login.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/login', {
                username,
                password,
            });
            if (response.status === 200) {
                history.push('/home');
            }
        } catch(err) {
            setError("Login failed. Credentials are wrong.")
        }
    };

    return (
        <div className='"login-container'>
            <h1>Login</h1>
            {error && <p className='error-message'>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                type="text"
                value={username}
                onChange={ (e) => setUsername(e.target.value)}
                placeholder='Username'
                required
                />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default LoginPage;