import React from 'react';
import './PremiumBrands.css';

const PremiumBrands = () => {
  const brands = [
    { name: 'Mercedes', logo: './img/icons8-mercedes-benz-48.png', alt: 'Mercedes Logo' },
    { name: 'Volkswagen', logo: './img/icons8-volkswagen-50.png', alt: 'Volkswagen Logo' },
    { name: 'Ford', logo: './img/icons8-ford-100.png', alt: 'Ford Logo' },
    { name: 'Kia', logo: './img/icons8-kia-100.png', alt: 'Kia Logo' },
    { name: 'Audi', logo: './img/icons8-audi-50.png', alt: 'Audi Logo' },
    { name: 'BMW', logo: '/img/icons8-bmw-48.png', alt: 'BMW Logo' },
    { name: 'Lamborghini', logo: './img/icons8-lamborghini-48.png', alt: 'Lamborghini Logo' },
  ];

  return (
    <div className="premium-brands">
      <div className="text-section">
        <h2>Explore Our Premium Brands</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est.
        </p>
        <button className="view-brands-button">Show All Brands &rarr;</button>
      </div>
      <div className="brand-circle">
        <span className="center-text">BOXCARS</span>
        {brands.map((brand, index) => (
          <div className={`brand-logo brand-${index}`} key={index}>
            <img src={brand.logo} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumBrands;
