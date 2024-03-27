import React, { useState, useContext } from 'react';
import axios from 'axios';
import { dataBasket } from '..';
import { useNavigate } from 'react-router-dom';
import "./style.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    console.log("Welcome")
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-quiz-app-u65j.onrender.com/register', formData);
      setMessage("Your data is saved successfully!");
      setTimeout(function() {
        navigate("/login")
      }, 2000);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage("Please check the data and register again!");
    }
  };

  return (
    <div>
      <h3 style={{textAlign: "center", marginTop: "50px", color: "#333", fontFamily: "Arial, sans-serif", fontSize: "24px", textTransform: "uppercase", letterSpacing: "2px", paddingBottom: "10px"}}>Student Registration Form</h3>
      <div className="register-container">
        <form className="register-form" method='POST' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Choose a strong password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm your password" />
          </div>
          <button id="btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
