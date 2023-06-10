import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/storymap');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <form className="form" onSubmit={handleLogin}>
          <h1 className="form-title">Login</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label"></label>
            <input
              className="form-input"
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password" className="form-label"></label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-button" type="submit">
              Login
            </button>
            <Link to="/create-account" className="create-account-link">
            <p className="create-account">Create Account</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;