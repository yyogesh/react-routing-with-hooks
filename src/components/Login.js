import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const loginSubmit = () => {
        if (username === 'abc' && password === '123') {
            history.push('/home');
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            localStorage.setItem('isAuthenticated', 'false');
        }

    }
    return (
        <div className="create">
            <h2>Login Page</h2>
            <form onSubmit={loginSubmit}>
                <label>User Name </label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password : </label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div >
    )
}

export default Login
