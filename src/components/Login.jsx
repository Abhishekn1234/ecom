
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response =await axios.post('http://localhost:3002/auth/login', { 
        email,
        password
      });
  
      
      
       
        console.log(response.data);
        navigate('/dashboard');
      
    } catch (error) {
      console.log('Error during login:');
    }
  };
  
  return (
    
        <div >
          <h2 >Login</h2>
          <div>
            <input
              type="email"
             
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button  onClick={handleLogin}>
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      
  );
};

export default Login;
