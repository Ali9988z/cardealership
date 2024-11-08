import React from 'react';
import './LatestCars.css';

const LatestCars = () => {
  const cars = [
    {
      image: './img/man-parked-side-road.jpg',
      title: 'T-Cross – 2023',
      description: '4.0 D5 PowerPulse Momentum 5dr AWD...',
      miles: '15 Miles',
      fuel: 'Petrol',
      transmission: 'CVT',
      price: '$15,000',
    },
    {
      image: './img/man-parked-side-road.jpg',
      title: 'C-Class – 2023',
      description: '4.0 D5 PowerPulse Momentum 5dr AWD...',
      miles: '50 Miles',
      fuel: 'Petrol',
      transmission: 'Automatic',
      price: '$150,000',
    },
    {
      image: './img/gray-suv-is-parked-road-front-field.jpg',
      title: 'Ford Transit – 2021',
      description: '4.0 D5 PowerPulse Momentum 5dr AWD...',
      miles: '2500 Miles',
      fuel: 'Diesel',
      transmission: 'Manual',
      price: '$22,000',
    },
    {
      image: './img/view-3d-car.jpg',
      title: 'New GLC – 2023',
      description: '4.0 D5 PowerPulse Momentum 5dr AWD...',
      miles: '50 Miles',
      fuel: 'Petrol',
      transmission: 'Automatic',
      price: '$95,000',
    },
  ];

  return (
    <div className="latest-cars">
      <h2>Latest Cars</h2>
      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.title} className="car-image" />
            <div className="car-info">
              <h3>{car.title}</h3>
              <p>{car.description}</p>
              <div className="car-details">
                <span>{car.miles}</span>
                <span>{car.fuel}</span>
                <span>{car.transmission}</span>
              </div>
              <div className="car-price">
                <strong>{car.price}</strong>
                <button className="view-details">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>❮</button>
        <button>❯</button>
      </div>
    </div>
  );
};

export default LatestCars;
