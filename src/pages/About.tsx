import React from 'react';
import Wrapper from '../sections/Wrapper';
import avatarImage from "../assets/avatar.png";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatar" className="profile-image" />
      <h1 className="profile-text">Hi, I am Shubham Kumar</h1>
      <h2 className="profile-text">The creator of this pokemon project.</h2>
      <div className="profile-links">
        <a href="https://github.com/shubhampr">
          <FaGithub />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About);
