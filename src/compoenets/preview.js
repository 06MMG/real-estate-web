import React from "react";
import home from "../assets/images/hp-hero-desktop.webp"
import home2 from "../assets/images/backgroundpic.jpg"
import './preview.css';



function Preview() {
  // Sample data of home images and titles
  const homes = [
    { title: "New Construction", imageUrl: home2 },
    { title: "Land", imageUrl: home },
    { title: "New Construction", imageUrl: home2 },
    { title: "Land", imageUrl: home },
    { title: "New Construction", imageUrl: home2 },
    { title: "Land", imageUrl: home },
    // Add more homes as needed
  ];

  return (
    <div className="home-preview">
    <h2 className="title-first">Browse homes in Miami Beach, FL</h2>
    <div className="spacer"></div>
    <div className="home-boxes">
      {homes.map((home, index) => (
        <div className="home-box" key={index}>
          <img src={home.imageUrl} alt={home.title} className="home-image" />
          <h3 className="home-title">{home.title}</h3>
        </div>
      ))}
    </div>
  </div>
);
}

export default Preview;