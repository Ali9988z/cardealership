import React from "react";
import { FaCar, FaTruck, FaBolt, FaCarAlt, FaBusAlt } from "react-icons/fa";
import "./Cartype.css";

const Cartype = () => {
    const carTypes = [
        { name: "SUV", icon: <FaCar /> },
        { name: "Sedan", icon: <FaCarAlt /> },
        { name: "Hatchback", icon: <FaBusAlt /> },
        { name: "Coupe", icon: <FaCarAlt /> },
        { name: "Hybrid", icon: <FaBolt /> },
        { name: "Convertible", icon: <FaCar /> },
        { name: "Van", icon: <FaBusAlt /> },
        { name: "Truck", icon: <FaTruck /> },
        { name: "Electric", icon: <FaBolt /> }
    ];

    return (
        <div className="cartype-container">
            <h2>Browse by Type</h2>
            <div className="car-types">
                {carTypes.map(type => (
                    <div key={type.name} className="car-type">
                        <div className="icon">{type.icon}</div>
                        <span>{type.name}</span>
                    </div>
                ))}
            </div>
            <div className="car-actions">
                <div className="action-card buy">
                    <h3>Are You Looking For a Car?</h3>
                    <p>We are committed to providing our customers with exceptional service.</p>
                    <button>Get Started</button>
                </div>
                <div className="action-card sell">
                    <h3>Do You Want to Sell a Car?</h3>
                    <p>We are committed to providing our customers with exceptional service.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cartype;
