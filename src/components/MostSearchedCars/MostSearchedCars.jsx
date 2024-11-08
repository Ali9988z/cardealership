import React from "react";
import "./MostSearchedCars.css";

const MostSearchedCars = () => {
    const cars = [
        {
            id: 1,
            title: "Ford Transit - 2021",
            price: "$22,000",
            label: "Great Price",
            imageUrl: "./img/gray-suv-is-parked-road-front-field.jpg",
            details: { mileage: "2500 Miles", fuel: "Diesel", transmission: "Manual" }
        },
        {
            id: 2,
            title: "New GLC - 2023",
            price: "$35,000",
            label: "Low Mileage",
            imageUrl: "./img/view-3d-car.jpg",
            details: { mileage: "50 Miles", fuel: "Petrol", transmission: "Automatic" }
        },
        {
            id: 3,
            title: "Audi A6 3.5 - New",
            price: "$58,000",
            label: "",
            imageUrl: "./img/photo-infiniti-g37-coupe-outdoors.jpg",
            details: { mileage: "100 Miles", fuel: "Petrol", transmission: "Automatic" }
        },
        {
            id: 4,
            title: "Corolla Altis - 2023",
            price: "$45,000",
            label: "",
            imageUrl: "./img/3d-car-with-simple-background.jpg",
            details: { mileage: "15000 Miles", fuel: "Petrol", transmission: "CVT" }
        },
    ];

    return (
        <div className="most-searched-container">
            <h2>The Most Searched Cars</h2>
            <div className="filters">
                <span>In Stock</span>
                <span>Sedan</span>
                <span>SUV</span>
                <span>Convertible</span>
            </div>
            <div className="car-cards">
                {cars.map(car => (
                    <div key={car.id} className="car-card">
                        <img src={car.imageUrl} alt={car.title} className="car-image" />
                        {car.label && <span className="label">{car.label}</span>}
                        <div className="car-info">
                            <h3>{car.title}</h3>
                            <p>{car.details.mileage} - {car.details.fuel} - {car.details.transmission}</p>
                            <div className="car-footer">
                                <span className="price">{car.price}</span>
                                <button className="details-button">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button>{"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    );
};

export default MostSearchedCars;
