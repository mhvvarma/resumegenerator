import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/home.css';
import { click } from '@testing-library/user-event/dist/click';

function Home() {
  const [page, setPage] = useState("");
  function homepage() {
    setPage();
  }
  return (
    <div className="container">
    <div className="row">
      <div className="x">
      {/* <div className="col-md-6"> */}
        <div className="card" onclick={homepage} onClick={() => console.log("Create new Resume clicked")}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCy2hlj1QlYnZHuPvRDQ6ypitFV3HHEFiQQk7Ex_Es5mcCiIJzDxV3cRGs-kd48IjYIo8&usqp=CAU" className="card-img-top" alt="google" />
          <div className="card-body">
            <h3>Create new Resume</h3>
          </div>
        </div>
      </div>
      <div className="x">
      {/* <div className="col-md-6"> */}
        <div className="card" onclick={homepage} onClick={() => console.log("Update Resume clicked")}>
        
          <img src="https://resumegenius.com/wp-content/uploads/update-resume-1.png" className="card-img-top" alt="google" />
          <div className="card-body">
            <h3>Update Resume</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;