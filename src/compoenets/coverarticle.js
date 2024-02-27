import React from "react";
import './coverarticle.css';
import PreviewBoxes from "./previewbox";
import backimg from '../assets/images/backimg.jpg';


function CoverArticle() {

  const title = "Exciting News!";
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    return (
      <div className="cover-article">
        <img src={backimg} alt="Cover" className="cover-image" />
        <div className="overlay">
          <h2 className="title">{title}</h2>
          <p className="text">{text}</p>
          <button className="read-article-button">Read Article</button>
        </div>
        <PreviewBoxes/>
      </div>
    );
  }
  
  export default CoverArticle;