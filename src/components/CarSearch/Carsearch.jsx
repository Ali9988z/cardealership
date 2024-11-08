import React from 'react';
import '../CarSearch/Carsearch.css';

const CarSearch = () => {
  return (
    <div className="car-search-container">
      <p className="subheader">Find cars for sale and for rent near you</p>
      <h1 className="header-car">Find Your Dream Car</h1>
      
      <div className="search-bar">
        <select className="dropdown-car">
          <option>Used Cars</option>
          <option>New Cars</option>
        </select>
        
        <select className="dropdown-car">
          <option>Any Makes</option>
          <option>Toyota</option>
          <option>Honda</option>
          <option>Ford</option>
        </select>
        
        <select className="dropdown-car">
          <option>Any Models</option>
          <option>Model S</option>
          <option>Model X</option>
        </select>
        
        <select className="dropdown-car">
          <option>All Prices</option>
          <option>$10,000 - $20,000</option>
          <option>$20,000 - $30,000</option>
        </select>
        
        <button className="search-button">
          🔍
        </button>
      </div>
      
      <div className="car-imagesearch">
        <img src="./img/—Pngtree—car white transportation daily travel_6561589.png" alt="Car" />
      </div>
    </div>
  );
};

export default CarSearch;
