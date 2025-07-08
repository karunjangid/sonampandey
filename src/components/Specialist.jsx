import React from 'react';
import '../style/HomePage.css';

function Specialist() {
const specialistsData = [
  { name: "Sonam Pandey", role: "Senior Lawyer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "John Doe", role: "Family Law Expert", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Jane Smith", role: "Criminal Defense Lawyer", img: "https://randomuser.me/api/portraits/women/46.jpg" },
];
  return (
        <section className="specialists">
          <h3>Our Specialists</h3>
          <div className="specialists-list">
            {specialistsData.map((specialist, index) => (
              <div key={index} className="specialist-card">
                <img src={specialist.img} alt={specialist.name} />
                <h4>{specialist.name}</h4>
                <p>{specialist.role}</p>
              </div>
            ))}
          </div>
        </section>
  );
}

export default Specialist;
