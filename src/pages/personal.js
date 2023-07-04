import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/personal.css';
import axios from 'axios';

const Personal = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === 'name') setName(value);
    if(name === 'email') setEmail(value);
    if(name === 'phoneNumber') setPhoneNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to your backend API with the form data
    axios.post('/api/form-data/personal', { name, email, phoneNumber })
      .then(response => {
        console.log('Form data successfully sent to backend:', response.data);
        navigate('/address');
      })
      .catch(error => {
        console.error('Error sending form data to backend:', error);
      });
  };

 

  return (
    <div className="App">
      <h1>Personal Details Form</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          <b>Name</b>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <b>Email</b>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <b>Phone Number</b>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            maxLength="10"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>

  );
};

export default Personal;
