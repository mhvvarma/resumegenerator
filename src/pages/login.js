import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';
import './css/login.css';

function Login() {
  const navigate = useNavigate();

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      '_self',
    );
  };

  function loginpage() {
    navigate('/login2');
  }

  return (
    <div className="body-login">
      <div className="container1">
        <div className="card1 left-card1">
          <div className="content">
            <h1 className="heading">
              <Typed strings={["Resume Generator"]} typeSpeed={80} />
              
            </h1>
            <h3>sign up</h3>

            <form className="form">
              <button onClick={googleAuth} type="submit" className="googlebutton">
                <img
                  className="googleimage"
                  src="https://cdn-icons-png.flaticon.com/512/2875/2875331.png"
                  alt="Google"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="card1 right-card1">
          <img
            className="image"
            src="https://resumekraft.com/wp-content/uploads/edd/2019/03/Free-One-page-Resume-Template-1000x750.jpg"
            alt="Resume Generator"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;