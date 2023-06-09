import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/createAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Registration successful, navigate to /storymap
        navigate('/storymap');
      } else {
        // Registration failed, handle accordingly
        const data = await response.json();
        console.log(data.error);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  return (
    <div className="ca-container">
      <div className="ca-form-container">
        <form className="ca-form" onSubmit={handleSubmit}>
          <h1 className="ca-form-title">Create Account</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
            </label>
            <input
              className="form-input"
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="password" className="form-label">
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="confirm-password" className="form-label">
            </label>
            <input
              className="form-input"
              id="confirm-password"
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button className="form-button" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
