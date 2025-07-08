import React from 'react';
import '../style/HomePage.css';

function Services() {
const servicesData = [
  { title: "Legal Consultation", icon: "⚖️" },
  { title: "Family Law",icon:"🧑‍⚖️"},
  { title: "Criminal Defense",icon:"🥷" },
  { title: "Corporate Law",icon: "🏢" },
];
  return (
        <section className="services">
          <h3>Our Services</h3>
          <div className="services-cards">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon || "⚖️"}</div>
                <h4>{service.title}</h4>
              </div>
            ))}
          </div>
        </section>
  );
}

export default Services;
