import { useState } from 'react';
import './login.css';

const DEMO_CREDENTIALS = {
    email: 'vicky',
    password: 'vicky',
};

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        const emailMatches = email.trim().toLowerCase() === DEMO_CREDENTIALS.email;
        const passwordMatches = password === DEMO_CREDENTIALS.password;

        if (emailMatches && passwordMatches) {
            setFeedback({ type: 'success', message: 'Signed in successfully.' });
            return;
        }

        setFeedback({ type: 'error', message: 'Email or password is incorrect.' });
    }

    return (
        <section className="login-page" aria-labelledby="login-title">
            <div className="login-panel">
                <h1 id="login-title">Welcome back</h1>
                <p className="login-subtitle">Sign in to continue.</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="login-email">Email</label>
                    <input
                        id="login-email"
                        name="email"
                        type="text"
                        inputMode="email"
                        autoComplete="username"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="login-password">Password</label>
                    <input
                        id="login-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />

                    <button type="submit">Sign in</button>
                </form>

                {feedback && (
                    <p
                        className={`login-feedback ${feedback.type}`}
                        role={feedback.type === 'error' ? 'alert' : 'status'}
                    >
                        {feedback.message}
                    </p>
                )}
            </div>
        </section>
    );
}