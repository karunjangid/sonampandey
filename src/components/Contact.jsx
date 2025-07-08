import React, { useState } from 'react';
import '../style/HomePage.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('https://formspree.io/f/mblyvonl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus(data.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Failed to send message.');
        }
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section className="contact">
      <h3>Get in Touch</h3>
      <div className="contact-info">
        <div className="contact-details">
          <p>Email: contact@sonampandeylaw.com</p>
          <p>Address: 123 Legal St, Lawcity</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <form className="consultation-form" onSubmit={handleSubmit}>
          <h4>Want to Connect WIth Us</h4>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
      <div className="map">
        {/* Map integration placeholder */}
        <iframe
          title="Law Firm Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902927927682!2d90.3994523154313!3d23.75090398458862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0b0b0b0b0%3A0x123456789abcdef!2sLaw%20Firm!5e0!3m2!1sen!2sbd!4v1610000000000!5m2!1sen!2sbd"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
