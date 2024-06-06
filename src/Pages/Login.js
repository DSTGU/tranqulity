import React, { useState } from 'react';
import { auth }  from '../Data/init';

const Login = ({ toggleLoginPopup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
      toggleLoginPopup(); // Close the login popup after successful login
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegister = async () => {
    console.log(auth)
    try {
      await auth.createUserWithEmailAndPassword(auth, email, password);
      alert('Registered successfully');
      toggleLoginPopup(); // Close the login popup after successful registration
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-popup">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      <button onClick={toggleLoginPopup}>Close</button>
    </div>
  );
};

export default Login;
