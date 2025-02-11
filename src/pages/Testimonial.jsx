import React from 'react';
import '../styles/Testimonial.css';
import cat from '../assets/cat.jpg';
import cheetah from '../assets/cheetah.jpg';
import dog from '../assets/dog.jpg';
import { image } from 'framer-motion/client';

const Testimonial = () => {
    const testimonials = [
        {
            name: 'John Doe',
            quote: 'This product is amazing! It has changed my life for the better.',
            image: cat
            
        },
        {
            name: 'Jane Smith',
            quote: 'I can\'t believe how much easier my work has become thanks to this.',
            image: cheetah
         
        },
        {
            name: 'Sam Wilson',
            quote: 'Highly recommend this to everyone. Great quality and support.',
            image: dog
           
        }
    ];

    return (
        <div className="testimonial-page">
            <h1>Testimonials</h1>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>"{testimonial.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;