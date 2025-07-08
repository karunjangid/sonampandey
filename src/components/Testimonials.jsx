import React from 'react';
import '../style/HomePage.css';

function Testimonials() {
const testimonialsData = [
  { name: "Client A", text: "Great experience and professional team." },
  { name: "Client B", text: "Helped me through a tough case with care." },
];
  return (
        <section className="testimonials">
          <h3>Testimonials</h3>
          <div className="testimonials-list">
            {testimonialsData.map((testi, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testi.text}"</p>
                <h4>- {testi.name}</h4>
              </div>
            ))}
          </div>
        </section>
  );
}

export default Testimonials;
