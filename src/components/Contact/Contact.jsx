import React, { useState } from "react";
import "../Contact/Contact.css"; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="contact-container">
            <h2>Contact us</h2>
            <p>Got any questions or suggestions? Fill out this form to reach out.</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                />
                <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                    rows="4"
                ></textarea>
                <button type="submit" className="contact-button">SEND</button>
            </form>
            <p className="contact-email">
                You can email us directly at <a href="mailto:contact@mycompany.com">contact@mycompany.com</a>
            </p>
        </div>
    );
};

export default Contact;
