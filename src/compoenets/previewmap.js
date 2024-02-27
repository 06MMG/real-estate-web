
import React from "react";
import './previewmap.css';

function Previewmap() {
  // Static data for map locations
  const locations = [
    { name: "Location 1", price: "$500,000", listings: 10, latitude: 37.7749, longitude: -122.4194 },
    { name: "Location 2", price: "$700,000", listings: 8, latitude: 34.0522, longitude: -118.2437 },
    { name: "Location 3", price: "$600,000", listings: 12, latitude: 40.7128, longitude: -74.0060 },
    { name: "Location 4", price: "$600,000", listings: 12, latitude: 40.7128, longitude: -74.0060 }
    // Add more locations as needed
  ];

  // Function to generate Google Maps URL with markers
  const generateMapUrl = (latitude, longitude) => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual Google Maps API key
    return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=300x200&maptype=roadmap&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;
  };

  return (
    <div className="preview-map">
      <h2 className="map-title">Explore Homes in Different Locations</h2>
      <div className="location-list">
        {locations.map((location, index) => (
          <div className="location-item" key={index}>
            <h3>{location.name}</h3>
            <img src={generateMapUrl(location.latitude, location.longitude)} alt={`Google Map for ${location.name}`} />
            <p>Price: {location.price}</p>
            <p>Listings: {location.listings}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Previewmap;