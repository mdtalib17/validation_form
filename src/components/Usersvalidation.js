import React, { useState } from 'react';
import './Uservalidation.css'

const UserValidation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your validation logic here
    if (username === 'valid_username' && password === 'valid_password') {
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Username:
        <input className='form-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input className='form-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className='form-submit' type="submit">Submit</button>
    </form>
  );
};

export default UserValidation;
