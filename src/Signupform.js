import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 4 || value.length > 20 ? 'Name must be between 4 and 20 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'password':
        return !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value)
          ? 'Password must contain at least one uppercase letter, one number, and one special character'
          : '';
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    if (Object.values(errors).some((error) => error !== '')) {
      console.log('Form contains errors. Please fix them.');
      return;
    }
  
   
    console.log('Form submitted:', formData);
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>

      <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.name}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.password}</span>
        </div>
        <div>
          <button type="submit"  disabled={Object.values(errors).some((error) => error !== '')}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
