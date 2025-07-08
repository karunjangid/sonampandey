import React, { useState } from 'react';
import '../style/Consultation.css';

function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    caseDetails: '',
    date: '',
    time: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, caseDetails, date, time } = formData;

    if (!name || !address || !caseDetails || !date || !time) {
      alert('Please fill in all fields.');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/myzjqwrn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Consultation request sent successfully!');
        setFormData({
          name: '',
          address: '',
          caseDetails: '',
          date: '',
          time: '',
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus(data.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Failed to send consultation request.');
        }
      }
    } catch (error) {
      setStatus('Failed to send consultation request.');
    }
  };

  return (
    <div className="consultation">
      <h2>Consultation</h2>
      <p>Schedule a consultation with Adv. Sonam Pandey to discuss your legal needs and get expert advice.</p>
      <form onSubmit={handleSubmit} className="consultation-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Case Details:
          <textarea
            name="caseDetails"
            value={formData.caseDetails}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}

export default Consultation;
