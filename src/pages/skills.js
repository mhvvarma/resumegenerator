import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/skill.css';
import axios from 'axios';

const Personal = () => {
  let navigate = useNavigate();
  const [skills, setSkills] = useState([{ name: '' }]);

  const handleAddSkill = () => {
    setSkills([...skills, { name: '' }]);
  };

  const handleDeleteSkill = () => {
    if(skills.length > 1){
      setSkills(skills.slice(0, -1));
    }
  };

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newSkills = [...skills];
    newSkills[index].name = value;
    setSkills(newSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to your backend API with the form data
    axios.post('/api/form-data/skills', skills)
      .then(response => {
        console.log('Form data successfully sent to backend:', response.data);
        navigate('/project');
      })
      .catch(error => {
        console.error('Error sending form data to backend:', error);
      });
  };

  return (
    <div className="App">
      <h1>Skills Details Form</h1>
      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={index}>
            <label>Field {index + 1} of {skills.length}</label>
            <label>
              <b>Skill</b>
              <input
                type="text"
                name="Skill"
                value={skill.name}
                onChange={(event) => handleChange(event, index)}
              />
            </label>
          </div>
        ))}
        <button className="field" type="button" onClick={handleAddSkill}>Add another field</button>
        {skills.length > 1 && (
          <button className="field" type="button" onClick={handleDeleteSkill}>Delete last field</button>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Personal;
