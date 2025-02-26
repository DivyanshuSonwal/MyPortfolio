import React, { useState } from 'react';

const LoginForm = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here, e.g., authentication API call
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
            <p className="flex justify-center font-bold text-xl">Registration Form</p>
            <div className="flex justify-center gap-2">
                <label>Email:</label>
                <input
                    className="border-2 border-neutral-800 rounded px-2"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="flex justify-center gap-2">
                <label>Password:</label>
                <input
                    className="border-2 border-neutral-800 rounded px-2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="flex justify-center font-bold border-4 w-20 rounded border-neutral-900" type="submit" onClick={() => setIsLoggedIn(true)}>Login</button>
        </form>
    );
};

export default LoginForm;