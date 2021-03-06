import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./LogIn.css";




async function loginUser(credentials) {
 return fetch('http://localhost:5000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function LogIn({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
        <div className ="login-container" >
          <div className ="lofo">
          <h1>Please Log In</h1>
       <form onSubmit={handleSubmit} className = "login-form">
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
          </div>
     
        </div>
      
    </div>
  )
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
};