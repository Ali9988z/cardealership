import React from "react";
import "./CarListing.css";

const CarListing = ({ car }) => {
  return (
    <div className="car-listing">
      <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
      <div className="cars-details">
        <h3>{car.year} {car.make} {car.model}</h3>
        <p className="price">${car.price.toLocaleString()}</p>
        <p>Mileage: {car.mileage.toLocaleString()} miles</p>
        <p>Engine: {car.engine}</p>
        <p>Transmission: {car.transmission}</p>
        <p>Fuel Type: {car.fuelType}</p>
        <p>Drive Type: {car.driveType}</p>
        <p>MPG: {car.mpg}</p>
        <ul className="features">
          {car.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarListing;
