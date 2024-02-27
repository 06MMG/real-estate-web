import React, { useState } from "react";
import { FaHome, FaBuilding, FaDollarSign, FaMoneyCheckAlt, FaCalculator, FaHandsHelping } from "react-icons/fa"; // Importing icons
import './previewbtn.css';

function Previewbtn() {
  // State variables for title, icons, and texts
  const [title, setTitle] = useState("Buying");
  const [icons, setIcons] = useState([<FaMoneyCheckAlt />, <FaCalculator />, <FaHandsHelping />]);
  const [texts, setTexts] = useState([
    "Find out how much you can afford",
    "Understand your monthly costs",
    "Get help with your down payment"
  ]);

  // Function to handle button clicks and update state
  const handleButtonClick = (newTitle, newIcons, newTexts) => {
    setTitle(newTitle);
    setIcons(newIcons);
    setTexts(newTexts);
  };

  return (
    <div className="preview">
      <h2 className="title-secound">Discover how we can help</h2>
      <div className="preview-buttons">
        <button className="preview-button" onClick={() => handleButtonClick("Buying", [<FaMoneyCheckAlt />, <FaCalculator />, <FaHandsHelping />], [
          "Find out how much you can afford",
          "Understand your monthly costs",
          "Get help with your down payment"
        ])}>
          <FaDollarSign /> {/* Use the icon */}
          <span className="preview-title">Buying</span>
        </button>
        <button className="preview-button" onClick={() => handleButtonClick("Renting", [<FaHome />, <FaCalculator />, <FaHandsHelping />], [
          "Discover rental properties in your area",
          "Calculate your monthly rental costs",
          "Find assistance with renting"
        ])}>
          <FaBuilding /> {/* Use the icon */}
          <span className="preview-title">Renting</span>
        </button>
        <button className="preview-button" onClick={() => handleButtonClick("Selling", [<FaDollarSign />, <FaCalculator />, <FaHandsHelping />], [
          "List your property for sale or rent",
          "Estimate your selling costs",
          "Get help with selling your property"
        ])}>
          <FaDollarSign /> {/* Use the icon */}
          <span className="preview-title">Selling</span>
        </button>
      </div>
      <div className="preview-boxes">
        {icons.map((icon, index) => (
          <div className="preview-box" key={index}>
            {icon} {/* Use the icon component */}
            <h3 className="preview-box-title">{title}</h3>
            <p className="preview-box-text">{texts[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Previewbtn;