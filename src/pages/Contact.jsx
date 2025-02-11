import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <div className="container">
            <form>
                <div className="name">
                    <label>Name: </label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="email">
                    <label>Email: </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="message">
                    <label>Message: </label>
                    <input id="message" name="message" required></input>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;