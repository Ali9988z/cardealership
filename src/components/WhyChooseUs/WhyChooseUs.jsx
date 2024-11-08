import React from 'react';
import './WhyChooseUs.css';
import { FaPercentage, FaCar, FaHandshake, FaTools } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPercentage />,
      title: 'Special Financing Offers',
      description: 'Our stress-free finance department can find financial solutions to save you money.',
    },
    {
      icon: <FaCar />,
      title: 'Trusted Car Dealership',
      description: 'We offer a large selection of cars with trusted quality and value.',
    },
    {
      icon: <FaHandshake />,
      title: 'Transparent Pricing',
      description: 'We provide transparent pricing with no hidden fees.',
    },
    {
      icon: <FaTools />,
      title: 'Expert Car Service',
      description: 'Our expert car service team ensures top performance and safety.',
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
