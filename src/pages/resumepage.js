import React, { useState ,useEffect} from "react";
import axios from "axios";
import './css/resumepage.css';
import jsPDF from 'jspdf';


function Resume() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/resume");
      setPersonalDetails(response.data.personalDetails);
      setAddress(response.data.address);
      setEducation(response.data.education);
      setSkills(response.data.skills);
      setProjects(response.data.projects);
      setAchievements(response.data.achievements);
      setWorkExperience(response.data.workExperience);
    } catch (error) {
      console.error(error);
    }
  };


  const handleDownload = () => {
    const doc = new jsPDF();

    if (personalDetails.name) {
      doc.text(personalDetails.name, 20, 20);
    }
    if (personalDetails.email && personalDetails.phone) {
      doc.text(personalDetails.email + " | " + personalDetails.phone, 20, 30);
    }
    if (address) {
      doc.text(address, 20, 40);
    }

    doc.setFontSize(16);
    if (education.length > 0) {
      doc.text("Education", 20, 60);
      doc.setFontSize(12);
      education.forEach((edu, index) => {
        doc.text(`${edu.degree}, ${edu.major}, ${edu.institution}, ${edu.year}`, 20, 70 + index * 10);
      });
    }

    if (skills.length > 0) {
      doc.setFontSize(16);
      doc.text("Skills", 20, 100);
      doc.setFontSize(12);
      skills.forEach((skill, index) => {
        doc.text(skill.name, 20, 110 + index * 10);
      });
    }

    if (projects.length > 0) {
      doc.setFontSize(16);
      doc.text("Projects", 20, 140);
      doc.setFontSize(12);
      projects.forEach((project, index) => {
        doc.text(`${project.name}, ${project.description}`, 20, 150 + index * 10);
      });
    }

    if (achievements.length > 0) {
      doc.setFontSize(16);
      doc.text("Achievements", 20, 180);
      doc.setFontSize(12);
      achievements.forEach((achievement, index) => {
        doc.text(`${achievement.name}, ${achievement.date}`, 20, 190 + index * 10);
      });
    }

    if (workExperience.length > 0) {
      doc.setFontSize(16);
      doc.text("Work Experience", 20, 220);
      doc.setFontSize(12);
      workExperience.forEach((experience, index) => {
        doc.text(`${experience.title}, ${experience.company}, ${experience.duration}`, 20, 230 + index * 10);
      });
    }

    doc.save('resume.pdf');
  };


  return (
    <div className="resume">
      <button onClick={handleDownload}>Download Resume</button>
      <h1>Resume</h1>
      <h2>Personal Details</h2>
      <p>Name: {personalDetails.name}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone: {personalDetails.phone}</p>
      <h2>Address</h2>
      <p>{address}</p>
      <h2>Education</h2>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>{edu.degree}, {edu.major}, {edu.institution}, {edu.year}</li>
        ))}
      </ul>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}, {project.description}</li>
        ))}
      </ul>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement.id}>{achievement.name}, {achievement.date}</li>
        ))}
      </ul>
      <h2>Work Experience</h2>
      <ul>
        {workExperience.map((experience) => (
          <li key={experience.id}>{experience.title}, {experience.company}, {experience.duration}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
