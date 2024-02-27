import React from "react";
import './previewbox.css';

import backgroundpic from '../assets/images/backgroundpic.jpg';
import homepic3 from '../assets/images/backpic.jpg';
import homepic4 from '../assets/images/hp-hero-desktop.webp';
import homepic2 from '../assets/images/backimg.jpg';

// Sample data for preview boxes
const previewData = [
  {
    title: "Trends",
    description: "Discover the latest real estate trends",
    images: [backgroundpic, homepic3, homepic4]
  },
  {
    title: "Celebrity Real Estate",
    description: "Explore homes owned by your favorite celebrities",
    images: [homepic4, homepic3, homepic2]
  },
  {
    title: "Celebrity Real Estate",
    description: "Explore homes owned by your favorite celebrities",
    images: [homepic4, homepic3, homepic2]
  },
  {
    title: "Celebrity Real Estate",
    description: "Explore homes owned by your favorite celebrities",
    images: [homepic4, homepic3, homepic2]
  }

  // Add more preview data as needed
];

function PreviewBoxes() {
  return (
    <div className="preview-boxes">
      {previewData.map((item, index) => (
        <div className="preview-box" key={index}>
          <h2 className="box-title">{item.title}</h2>
          <p className="box-description">{item.description}</p>
          <div className="image-gallery">
            {item.images.map((image, i) => (
              <img key={i} src={image} alt={`Image ${i+1}`} className="box-image" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreviewBoxes;