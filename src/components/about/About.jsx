import React from "react";
import './about.css';

const About = () => {
  return (
    <div className="main_about">
      <div className="about_img">
        <img src="../../photo/me.jpg" alt="me"></img>
      </div>
      <div className="about_text">
        <h3>Who Am I</h3>
        <p className="text-sky-500 dark:text-sky-400">
          Hi! My name is AL JABIR. I am a Frontend junior web developer and I am
          enthusiastic of programming. I have more than 1+ years of experience
          in web design and web development. I am a Frontend web Developer with
          the skill HTML, CSS, bootstrap, Material UI, Javascript, React.js,
          etc. And I'm trying to learn backend MongoDB, express.js, node.js I
          did some work in the backend, I hope to become a full-stack developer
          very soon I'm a Frontend web developer and Fancy web designer. I
          started building websites in 2020. I know how to make an appealing
          website. Though I am a junior Developer and designer but I am very
          Confident about my work .
        </p>
      </div>
    </div>
  );
};

export default About;
