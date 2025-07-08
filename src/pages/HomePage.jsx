import React, { useEffect, useState } from "react";
import "../style/HomePage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const heroData = [
  {
    title: "Expert Legal Advice",
    description: "Get professional advice from experienced lawyers.",
    img: "https://www.pngplay.com/wp-content/uploads/9/Lawyer-PNG-Photos.png",
  },
  {
    title: "Family Law Specialists",
    description: "Compassionate support for family-related legal matters.",
    img: "https://www.pngall.com/wp-content/uploads/5/Female-Lawyer-PNG.png",
  },
  {
    title: "Criminal Expert",
    description: "Protecting your rights with strong defense strategies.",
    img: "https://wallpapers.com/images/hd/liability-insurance-document-png-wie-8tyi5hp1l464rfh2.png",
  },
  {
    title: "Corporate Services",
    description: "Comprehensive legal solutions for businesses.",
    img: "https://th.bing.com/th/id/R.b405dca6646c6f34bea46ec75c01cc0a?rik=fqs7HlOJltiMPg&riu=http%3a%2f%2ftalentgalore.in%2fwp-content%2fuploads%2f2023%2f05%2fIndian-Female.png&ehk=SNU3F7yODVQpQv8%2bOljxtJq2aEJ5uCT1Tp5dHBdwavQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Consultation",
    description: "Personalized legal representation tailored to you.",
    img: "https://d1l92n9kqjbmnl.cloudfront.net/assets/images/marketing/marketing-reports/Marketing-Marketing_Reports-banner-image.png",
  },
];

const servicesData = [
  { title: "Legal Consultation", icon: "⚖️" },
  { title: "Family Law",icon:"🧑‍⚖️"},
  { title: "Criminal Defense",icon:"🥷" },
  { title: "Corporate Law",icon: "🏢" },
];

const specialistsData = [
  { name: "Sonam Pandey", role: "Senior Lawyer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "John Doe", role: "Family Law Expert", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Jane Smith", role: "Criminal Defense Lawyer", img: "https://randomuser.me/api/portraits/women/46.jpg" },
];

const awardsData = [
  { title: "Best Law Firm 2022", img: "https://img.icons8.com/color/48/000000/trophy.png" },
  { title: "Top Legal Service 2023", img: "https://img.icons8.com/color/48/000000/medal.png" },
];

const satisfiedCustomersData = [
  { name: "Alice", feedback: "Excellent service and support!" },
  { name: "Bob", feedback: "Highly recommend this firm." },
];

const experienceData = [
  { year: "2010", description: "Firm Established" },
  { year: "2015", description: "Expanded Services" },
  { year: "2020", description: "Awarded Best Law Firm" },
];

const galleryData = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
];

const testimonialsData = [
  { name: "Client A", text: "Great experience and professional team." },
  { name: "Client B", text: "Helped me through a tough case with care." },
];

function HomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [showWelcome, setShowWelcome] = useState(() => {
    // Initialize from localStorage or default to true
    const saved = localStorage.getItem('showWelcome');
    console.log("Initial showWelcome from localStorage:", saved);
    return saved === null ? true : JSON.parse(saved);
  });

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Persist showWelcome state to localStorage
    console.log("Persisting showWelcome to localStorage:", showWelcome);
    localStorage.setItem('showWelcome', JSON.stringify(showWelcome));
  }, [showWelcome]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    // Welcome message text
    const welcomeMessage = "WELCOME TO LAW FIRM OF ADVOCATE SONAM PANDEY";

  // WelcomeScreen component
  const WelcomeScreen = ({ onFinish }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      if (!('speechSynthesis' in window)) {
        // If speech synthesis not supported, just show full text and finish after delay
        setDisplayedText(welcomeMessage);
        const timeout = setTimeout(() => {
          onFinish();
        }, 4000);
        return () => clearTimeout(timeout);
      }

      // Speech synthesis
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(welcomeMessage);
      utterance.lang = 'en-US';
      utterance.rate = 1;
      utterance.pitch = 1;

      // Typewriter effect timing based on speech duration estimate
      // Approximate duration: number of words / 2 (words per second)
      const words = welcomeMessage.split(" ");
      const duration = (words.length / 2) * 1000; // in ms
      const intervalTime = duration / welcomeMessage.length;

      let index = 0;
      const typeInterval = setInterval(() => {
        setDisplayedText((prev) => prev + welcomeMessage.charAt(index));
        index++;
        if (index >= welcomeMessage.length) {
          clearInterval(typeInterval);
        }
      }, intervalTime);

      utterance.onend = () => {
        clearInterval(typeInterval);
        onFinish();
      };

      synth.speak(utterance);

      return () => {
        clearInterval(typeInterval);
        synth.cancel();
      };
    }, [onFinish]);

    return (
      <div className="welcome-screen">
        <h1 className="welcome-text">{displayedText}<span className="cursor">|</span></h1>
        <button onClick={() => onFinish()} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Close Welcome Message
        </button>
      </div>
    );
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onFinish={() => setShowWelcome(false)} />
      ) : (
        <>
          <main id="home" className="home-page">
            <section className="hero">
              <div className="hero-image">
                <img src={heroData[currentHeroIndex].img} alt={heroData[currentHeroIndex].title} />
                <div className="hero-content">
                  <h1>{heroData[currentHeroIndex].title}</h1>
                  <p>{heroData[currentHeroIndex].description}</p>
                  <button><a href="/consultation" style={{ textDecoration: 'none',color:'#F0DAC5' }}>Book a Schedule Now</a></button>
                </div>
              </div>
            </section>

            <section className="about-us" style={{marginTop: '30px'}}>
              <h3>About Us</h3>
              <p>
                Adv. Sonam Pandey's Law Firm is dedicated to providing expert legal services with a modern and professional approach. Our team of specialists is committed to achieving the best outcomes for our clients.
              </p>
            </section>

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

            <section className="awards">
              <h3>Awards & Recognition</h3>
              <div className="awards-list">
                {awardsData.map((award, index) => (
                  <div key={index} className="award-card">
                    <img src={award.img} alt={award.title} />
                    <p>{award.title}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="satisfied-customers">
              <h3>Satisfied Customers</h3>
              <div className="customers-list">
                {satisfiedCustomersData.map((customer, index) => (
                  <div key={index} className="customer-card">
                    <p>"{customer.feedback}"</p>
                    <h4>- {customer.name}</h4>
                  </div>
                ))}
              </div>
            </section>

            <section className="experience">
              <h3>Our Experience</h3>
              <div className="experience-timeline">
                {experienceData.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h4>{exp.year}</h4>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="gallery">
              <h3>Gallery</h3>
              {isMobile ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                >
                  {galleryData.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Gallery image ${index + 1}`} style={{ width: '100%', borderRadius: '15px' }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="gallery-slider">
                  {galleryData.map((img, index) => (
                    <div key={index} className="gallery-slide">
                      <img src={img} alt={`Gallery image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </section>

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

            <section className="contact">
              <h3>Get in Touch</h3>
              <div className="contact-info">
                <div className="contact-details">
                  <p>Email: contact@sonampandeylaw.com</p>
                  <p>Address: 123 Legal St, Lawcity</p>
                  <p>Phone: +123 456 7890</p>
                </div>
                <form className="consultation-form">
                  <h4>Consultation Form</h4>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit">Submit</button>
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
          </main>
        </>
      )}
    </>
  );
}

export default HomePage;
