import React, { useState, useContext } from 'react';
import axios from 'axios';
import { dataBasket } from '..';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./style.css";

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const { setUsername, loggedIn, setIsLoggedIn, setEmail } = useContext(dataBasket);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-quiz-app-u65j.onrender.com/login', loginData);
      setUsername(response.data.user.name);
      setEmail(response.data.user.email);
      // Redirect to QuizPage upon successful login
      setIsLoggedIn(true)
      navigate('/quizpage');
    } catch (error) {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "50px", color: "#333", fontFamily: "Arial, sans-serif", fontSize: "24px", textTransform: "uppercase", letterSpacing: "2px", paddingBottom: "10px" }}>Student Login Form</h3>
      <div style={{ marginBottom: 71, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} method="POST" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
          <input type="email" name="email" placeholder="Enter your email" value={loginData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }} />
          <input type="password" name="password" placeholder="Enter your password" value={loginData.password} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }} />
          <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', border: 'none', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
