import React from "react";
import AboutBackground from "../assets/about-background.jpg";
import AboutBackgroundImage from "../assets/about-background-image.jpg";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          We are a creative studio focused on design and branding.
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          architecto corrupti cum saepe porro consectetur officia explicabo at
          impedit repudiandae.
        </p>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
          repellendus vero magni, in saepe ratione ut iusto exercitationem
          eveniet?
        </p>
        <div className="about-button-container">
          <button className="secondary-button">Learn more</button>
          <button className="wat"></button>
        </div>
      </div>
    </div>
  );
};

export default About;
